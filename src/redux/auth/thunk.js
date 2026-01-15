import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const authApi = axios.create({
  baseURL: "https://wedsocial-api.vercel.app/auth/",
});

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials, thunkAPI) => {
    try {
      const response = await authApi.post("sign-in", credentials);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error.message[0]);
    }
  }
);
