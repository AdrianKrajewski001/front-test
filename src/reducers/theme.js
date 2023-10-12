import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isDarkMode: localStorage.getItem("isDarkMode") === "true" ?? false,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state) => {
			localStorage.setItem("isDarkMode", !state.isDarkMode);
			state.isDarkMode = !state.isDarkMode;
		},
	},
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
