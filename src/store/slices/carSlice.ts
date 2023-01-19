import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

export interface CarState {
  searchTerm: string;
  cars: Car[];
}

export interface Car {
  name: string;
  cost: number;
  id?: string;
}

const carSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [
      {
        name: "Ferrari",
        cost: 101,
        id: "01",
      },
    ],
  } as CarState,
  reducers: {
    changeSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    addCar(state, action: PayloadAction<Car>) {
      state.cars.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    removeCar(state, action: PayloadAction<string | undefined>) {
      state.cars = state.cars.filter(item => item.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;
