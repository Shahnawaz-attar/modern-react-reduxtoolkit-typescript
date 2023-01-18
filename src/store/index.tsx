import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";

const store = configureStore({
  reducer: {
    song: songReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const { dispatch } = store;
export { store, addSong, removeSong };
