import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { reset } from "../actions/songsAction";

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
      title: "Song title ",
    },
  ],
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs = [...state.songs, action.payload];
    },
    removeSong: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs.filter(song => song.id !== action.payload.id);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      state.songs = [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;

export const songReducer = songsSlice.reducer;
