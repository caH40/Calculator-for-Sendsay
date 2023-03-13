import { configureStore } from '@reduxjs/toolkit';
import calculatorSlice from './features/calculatorSlice';
import dragSlice from './features/dragSlice';
import modeSlice from './features/modeSlice';

export const store = configureStore({
	reducer: { mode: modeSlice, drag: dragSlice, calculator: calculatorSlice },
});
