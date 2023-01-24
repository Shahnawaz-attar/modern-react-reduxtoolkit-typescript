import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { faker } from "@faker-js/faker";

interface User {
  name: string;
  id: number;
}

interface Error {
  message: string;
}

const addUser = createAsyncThunk<User, void>(
  "users/add",
  async (arg, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<User> = await axios.post(
        "http://localhost:3005/users",
        {
          name: faker.name.fullName(),
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error as Error);
    }
  }
);

export { addUser };
