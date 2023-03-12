import { configureStore } from '@reduxjs/toolkit';
import dragSlice from './features/dragSlice';
import modeSlice from './features/modeSlice';

export const store = configureStore({
	reducer: { mode: modeSlice, drag: dragSlice },
});
