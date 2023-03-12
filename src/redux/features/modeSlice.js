import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
	name: 'mode',
	initialState: { isRuntime: true },
	reducers: {
		setMode: (state, action) => {
			state.isRuntime = action.payload;
		},
	},
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
