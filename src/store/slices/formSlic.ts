import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormState {
  name: string;
  cost: number;
}

const initialState: FormState = {
  name: "",
  cost: 0,
};

const formSlicer = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeCost(state, action: PayloadAction<number>) {
      state.cost = action.payload;
    },
  },
});

export const { changeName, changeCost } = formSlicer.actions;

export const formReducer = formSlicer.reducer;
