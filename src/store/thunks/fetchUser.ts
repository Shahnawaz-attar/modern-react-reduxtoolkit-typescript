import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

interface User {
  name: string;
  id: number;
}

interface Error {
  message: string;
}
const fetchUsers = createAsyncThunk<User, void>(
  "users/fetch",
  async (arg, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<User> = await axios.get(
        "http://localhost:3005/users"
      );
      await pause(1000);
      return response.data;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);

const pause = (duration: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
