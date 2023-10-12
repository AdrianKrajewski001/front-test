import { configureStore } from "@reduxjs/toolkit";
import app from "./reducers/app";
import theme from "./reducers/theme";

export const store = configureStore({
	reducer: {
		app,
		theme,
	},
});
