import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

export const { addMovie, removeMovie } = moviesSlice.actions;
export const movieReducer = moviesSlice.reducer;
