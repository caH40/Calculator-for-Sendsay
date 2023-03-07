import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
	name: 'test',
	initialState: { value: 'test' },
	reducers: {
		getTest: (state, action) => (state.value = state.value + action.payload),
	},
});

export const { getTest } = testSlice.actions;
export default testSlice.reducer;
