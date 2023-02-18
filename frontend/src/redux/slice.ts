import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "slice",
	initialState: {
		foods: {
			name: "",
		},
		school: {
			name: "",
			number: 0,
		},
	},
	reducers: {
		setFood: (state, { payload: { foods } }) => {
			state.foods = foods;
		},
		setSchool: (state, { payload: { school } }) => {
			state.school = school;
		},
	},
});

export const { setFood, setSchool } = slice.actions;

export default slice.reducer;
