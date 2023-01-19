import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlic";
import {
  addCar,
  carReducer,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";

const store = configureStore({
  reducer: {
    song: songReducer,
    form: formReducer,
    car: carReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { dispatch } = store;
export {
  store,
  addSong,
  removeSong,
  changeCost,
  changeName,
  addCar,
  removeCar,
  changeSearchTerm,
};
