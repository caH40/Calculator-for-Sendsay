import { createSlice } from '@reduxjs/toolkit';
import { formatResult } from '../../utils/format';

const calculatorSlice = createSlice({
	name: 'calculator',
	initialState: {
		firstNumber: '0',
		secondNumber: '',
		mathSign: '',
		result: '',
		modeText: false,
	},
	reducers: {
		setNumber: (state, action) => {
			if (state.modeText) state.modeText = false;
			if (state.result !== '') state.result = '';
			if (state.mathSign === '') {
				if (state.firstNumber.includes(',') && action.payload === ',') return;
				if (state.firstNumber.length === 9) return;
				const number = state.firstNumber === '0' ? '' : state.firstNumber;
				state.firstNumber = number + action.payload;
			} else {
				if (state.secondNumber.includes(',') && action.payload === ',') return;
				if (state.secondNumber.length === 9) return;
				state.secondNumber += action.payload;
			}
		},

		setMathSign: (state, action) => {
			if (state.firstNumber === '') return;
			if (state.mathSign !== '') return;

			state.mathSign = action.payload;
		},

		getResult: state => {
			if (state.secondNumber === '') return;
			const firstNumber = +state.firstNumber.replace(',', '.');
			const secondNumber = +state.secondNumber.replace(',', '.');
			let result = '';
			switch (state.mathSign) {
				case '+':
					result = formatResult(firstNumber + secondNumber);
					state.result = result;
					state.firstNumber = '';
					state.secondNumber = '';
					state.mathSign = '';
					break;
				case '/':
					if (secondNumber === 0) {
						state.modeText = true;
						result = 'Cannot divide by zero';
					} else {
						result = formatResult(firstNumber / secondNumber);
					}

					state.result = result;
					state.firstNumber = '';
					state.secondNumber = '';
					state.mathSign = '';
					break;
				case 'x':
					result = formatResult(firstNumber * secondNumber);
					state.result = result;
					state.firstNumber = '';
					state.secondNumber = '';
					state.mathSign = '';
					break;
				case '-':
					result = formatResult(firstNumber - secondNumber);
					state.result = result;
					state.firstNumber = '';
					state.secondNumber = '';
					state.mathSign = '';
					break;
				default:
					state.result = 'error';
			}
		},

		reset: state => {
			state.firstNumber = '0';
			state.secondNumber = '';
			state.mathSign = '';
			state.result = '';
			state.modeText = false;
		},
	},
});

export const { setNumber, setMathSign, getResult, reset } = calculatorSlice.actions;

export default calculatorSlice.reducer;
