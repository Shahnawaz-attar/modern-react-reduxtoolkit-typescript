import { configureStore } from "@reduxjs/toolkit";
import { songReducer, addSong, removeSong } from "./slices/songSlice";

const store = configureStore({
  reducer: {
    songs: songReducer,
  },
});

export { store, addSong, removeSong };
