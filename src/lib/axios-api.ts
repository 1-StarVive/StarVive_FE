import axios from "axios";
import { useAuthStore } from "../store/auth.store";
import { refresh, RefreshResponse } from "./api/user";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 5000,
});

api.interceptors.request.use(function setAuthHeader(config) {
  console.log(config.baseURL, config.url);
  const store = useAuthStore.getState();
  if (store.auth) {
    config.headers.Authorization = `Bearer ${store.auth.accessToken}`;
  }
  return config;
});

let refreshingPromise: Promise<RefreshResponse> | null = null;
api.interceptors.response.use(
  (response) => {
    console.log("response!!");
    return response;
  },
  async (error) => {
    console.log("error!!", error.response?.status, error.config.url);
    const store = useAuthStore.getState();
    if (axios.isAxiosError(error) && error.status === 401 && error.config && refreshingPromise === null && store.auth) {
      try {
        refreshingPromise = refresh(store.auth.refreshToken);
        const refreshed = await refreshingPromise;
        store.setAccessToken(refreshed);

        error.config.headers.Authorization = `Bearer ${refreshed.accessToken}`;

        return api.request(error.config);
      } catch (e) {
        if (axios.isAxiosError(e)) {
          store.logout();
        }
      } finally {
        refreshingPromise = null;
      }
    }
    return Promise.reject(error);
  },
);

export default api;
