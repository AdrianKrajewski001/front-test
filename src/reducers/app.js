import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	list: { images: [], total: 0 },
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setList: (state, action) => {
			state.list = {
				total: action.payload.total,
				images: [...state.list.images, ...action.payload.images],
			};
		},
	},
});

export const { setList } = appSlice.actions;

export default appSlice.reducer;
