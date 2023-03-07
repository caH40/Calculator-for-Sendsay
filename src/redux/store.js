import { configureStore } from '@reduxjs/toolkit';
import testSlice from './features/testSlice';

export const store = configureStore({
	reducer: { testReducer: testSlice },
});
