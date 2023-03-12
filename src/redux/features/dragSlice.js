import { createSlice } from '@reduxjs/toolkit';

const dragSlice = createSlice({
	name: 'dragAndDrop',
	initialState: {
		scoreboard: { isMounted: false, top: 0 },
		math: { isMounted: false },
		numbers: { isMounted: false },
		result: { isMounted: false },
		draggedElement: '',
		isOverCanvas: false,
	},
	reducers: {
		dragStartHandler: (state, action) => {
			state.draggedElement = action.payload;
		},

		dragEndHandler: state => {
			state.draggedElement = '';
		},

		dragOverHandler: state => {
			state.isOverCanvas = true;
		},

		dragLeaveHandler: state => {
			state.isOverCanvas = false;
		},

		dragDropHandler: (state, action) => {
			let top;
			if (action.payload.draggedElement === 'scoreboard') {
				top = 0;
			} else {
				top = +action.payload.top;
			}

			state.isOverCanvas = false;

			state[action.payload.draggedElement] = {
				isMounted: true,
				top,
			};
		},

		getDoubleClick: (state, action) => {
			state[action.payload] = { isMounted: false };
		},

		regroup: (state, action) => {
			const heightBlocks = { math: 56 + 8, numbers: 224 + 8, result: 72 + 8 };

			const sortedBlocks = [...action.payload]
				.filter(block => block.top)
				.sort((a, b) => a.top - b.top);

			if (!sortedBlocks.length) return;
			console.log();
			const newPosition = heightBlocks[sortedBlocks[0].name] + 68;

			if (sortedBlocks[0].top === 68) {
				if (!sortedBlocks[1]?.top) return;
				state[sortedBlocks[1].name] = { isMounted: true, top: newPosition };
			} else {
				if (sortedBlocks[0].top) state[sortedBlocks[0].name].top = 68;
				if (sortedBlocks[1]?.top) state[sortedBlocks[1].name].top = newPosition;
			}
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
	regroup,
} = dragSlice.actions;

export default dragSlice.reducer;
