import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: { searchTerm: "", cars: [] },
  reducers: {
    changeSearchTermn(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updateCarList = state.cars.filter((car) => {
        return car.id !== action.payload;
      });
      state.cars = updateCarList;
    },
  },
});

export const { changeSearchTermn, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
