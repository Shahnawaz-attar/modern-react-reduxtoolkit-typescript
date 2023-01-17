import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Song {
  id: string;
  title: string;
}

interface SongState {
  songs: Song[];
}

const initialState: SongState = {
  songs: [
    {
      id: "1",
      title: "any",
    },
  ],
};

const songsSlice = createSlice({
  name: "song",
  initialState: initialState,
  reducers: {
    addSong: (state: any, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    removeSong: (state: any, action: PayloadAction<Song>) => {
      const index = state.songs.indexOf(action.payload);
      state.songs.splice(index, 1);
    },
  },
});

export const { addSong, removeSong } = songsSlice.actions;

export const songReducer = songsSlice.reducer;
