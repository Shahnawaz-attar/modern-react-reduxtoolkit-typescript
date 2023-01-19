import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { changeCost, changeName, formReducer } from "./slices/formSlic";

const store = configureStore({
  reducer: {
    song: songReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { dispatch } = store;
export { store, addSong, removeSong, changeCost, changeName };
