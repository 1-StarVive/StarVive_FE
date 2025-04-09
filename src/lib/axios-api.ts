import axios, { AxiosResponse } from "axios";
import { RefreshedTokenDto, useAuthStore } from "../store/auth.store";
import { sub } from "date-fns";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 5000,
});

api.interceptors.request.use(function setAuthHeader(config) {
  const store = useAuthStore.getState();
  if (store.auth) {
    config.headers.Authorization = `Bearer ${store.auth.accessToken}`;
  }
  return config;
});

let refreshingPromise: Promise<AxiosResponse<RefreshedTokenDto, any>> | null = null;
api.interceptors.request.use(async function refreshToken(config) {
  const store = useAuthStore.getState();
  if (!store.auth) return config;

  const isExpiringSoon = sub(store.auth.expiredAt, { minutes: 5 }) < new Date();
  if (isExpiringSoon) {
    if (!refreshingPromise) {
      refreshingPromise = api.post("/auth/users/refresh", {
        refreshToken: store.auth.refreshToken,
      });
    }
    try {
      const refreshed = await refreshingPromise;
      if (refreshed.status) store.setAccessToken(refreshed.data);
    } catch (e) {
      if (axios.isAxiosError(e)) {
        store.logout();
      }
    } finally {
      refreshingPromise = null;
    }
  }
  return config;
});

export default api;
