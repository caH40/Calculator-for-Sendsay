import { configureStore } from '@reduxjs/toolkit';
import modeSlice from './features/modeSlice';

export const store = configureStore({
	reducer: { mode: modeSlice },
});
