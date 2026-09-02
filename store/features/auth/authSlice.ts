import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthRole } from "@/lib/auth/roles";

export type AuthUser = {
  id: string;
  email: string;
  full_name: string;
  username?: string | null;
  phone_number?: string | null;
  role: AuthRole | string;
  industry?: string | null;
  job_role?: string | null;
  street_address?: string | null;
  city?: string | null;
  state?: string | null;
  postal_code?: string | null;
  bio?: string | null;
  is_active: boolean;
  is_verified: boolean;
  email_two_step_enabled?: boolean;
};

type AuthState = {
  accessToken: string | null;
  user: AuthUser | null;
  status: "loading" | "authenticated" | "unauthenticated";
};

const initialState: AuthState = {
  accessToken: null,
  user: null,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string; user: AuthUser }>) => {
      state.accessToken = action.payload.token;
      state.user = action.payload.user;
      state.status = "authenticated";
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload; // used after silent refresh
    },
    clearCredentials: (state) => {
      state.accessToken = null;
      state.user = null;
      state.status = "unauthenticated";
    },
  },
});

export const { setCredentials, setToken, clearCredentials } = authSlice.actions;
export default authSlice.reducer;