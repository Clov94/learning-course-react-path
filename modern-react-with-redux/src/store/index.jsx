import { configureStore } from "@reduxjs/toolkit";
import { addMovie, movieReducer, removeMovie } from "./slices/moviesSlice";
import { addSong, removeSong, songsReducer } from "./slices/songsSlice";
import {reset} from './actions/actions'

// console.log(songsSlice.actions.addMovie({ metallica: "Seek And Destroyed" }))

const store = configureStore({
  reducer: { songs: songsReducer, movies: movieReducer }
});

export { addMovie, addSong, removeMovie, removeSong, store, reset  };

