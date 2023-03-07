import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
	name: 'mode',
	initialState: { value: { isRuntime: true } },
	reducers: {
		setMode: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
