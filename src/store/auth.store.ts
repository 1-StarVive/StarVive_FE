import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface RefreshedTokenDto {
  accessToken: string;
  expiresIn: number;
  refreshToken?: string;
}

export interface TokenDto {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
}

export type AuthState = {
  auth?: {
    accessToken: string;
    refreshToken: string;
    expiredAt: Date;
  };
};

export type AuthAction = {
  setToken: (args: TokenDto) => void;
  setAccessToken: (accessToken: RefreshedTokenDto) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState & AuthAction>()(
  persist(
    (set) => ({
      setToken: ({ accessToken, expiresIn, refreshToken }) =>
        set({
          auth: {
            accessToken,
            expiredAt: new Date(Date.now() + expiresIn * 1000),
            refreshToken,
          },
        }),
      setAccessToken: ({ accessToken, expiresIn, refreshToken }) =>
        set((prev) =>
          prev.auth
            ? {
                auth: {
                  accessToken,
                  expiredAt: new Date(Date.now() + expiresIn * 1000),
                  refreshToken: refreshToken ?? prev.auth.refreshToken,
                },
              }
            : { auth: undefined },
        ),
      logout: () => set({ auth: undefined }),
    }),
    { name: "auth-storage" },
  ),
);
