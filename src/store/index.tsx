import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlic";
import {
  addCar,
  carReducer,
  removeCar,
  changeSearchTerm,
} from "./slices/carSlice";
import { userReducer, UsersState } from "./slices/userSlices";

const store = configureStore({
  reducer: {
    song: songReducer,
    form: formReducer,
    car: carReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

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

export * from "./thunks/userThunk";
export * from "./thunks/fetchUser";
