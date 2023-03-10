import { createSlice } from '@reduxjs/toolkit';

const dragSlice = createSlice({
	name: 'dragAndDrop',
	initialState: {
		value: {
			scoreboard: { isMounted: false },
			math: { isMounted: false },
			numbers: { isMounted: false },
			result: { isMounted: false },
			draggedElement: '',
			isOverCanvas: false,
		},
	},
	reducers: {
		dragStartHandler: (state, action) => {
			state.value.draggedElement = action.payload;
		},

		dragEndHandler: state => {
			state.value.draggedElement = '';
		},

		dragOverHandler: (state, action) => {
			state.value = {
				...state.value,
				isOverCanvas: true,
				[state.value.draggedElement]: { position: { top: action.payload } },
			};
		},

		dragLeaveHandler: state => {
			state.value.isOverCanvas = false;
		},

		dragDropHandler: (state, action) => {
			let position;
			if (action.payload.draggedElement === 'scoreboard') {
				position = { top: '0px' };
			} else {
				position = { top: `${action.payload.position}px` };
			}

			state.value = {
				...state.value,
				isOverCanvas: false,
				[state.value.draggedElement]: {
					isMounted: true,
					position,
				},
			};
		},

		getDoubleClick: (state, action) => {
			state.value = {
				...state.value,
				...action.payload,
			};
		},
	},
});

export const {
	dragDropHandler,
	getDoubleClick,
	dragStartHandler,
	dragEndHandler,
	dragOverHandler,
	dragLeaveHandler,
} = dragSlice.actions;

export default dragSlice.reducer;
