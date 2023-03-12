import { createSlice } from '@reduxjs/toolkit';

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: { score: 0 },
});

export const { actionNew } = calculatorSlice.actions;

export default calculatorSlice.reducer;
