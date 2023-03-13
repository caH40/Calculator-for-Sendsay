import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragEndHandler, dragStartHandler } from '../../redux/features/dragSlice';

import cls from './Scoreboard.module.css';

const Scoreboard = ({ doubleClick, locatedOnCanvas, position }) => {
	const dispatch = useDispatch();
	const { scoreboard } = useSelector(state => state.drag);
	const { firstNumber, secondNumber, mathSign, result, modeText } = useSelector(
		state => state.calculator
	);

	const score = () => {
		if (result !== '') return result;
		if (mathSign !== '' && secondNumber === '') return mathSign;
		if (mathSign !== '') return secondNumber;
		return firstNumber;
	};

	return (
		<div
			className={`${cls.wrapper} ${locatedOnCanvas ? cls.notActive : ''} ${
				scoreboard.isMounted ? cls.mountedBox : ''
			}`}
			draggable={!scoreboard.isMounted}
			onDragStart={e => dispatch(dragStartHandler('scoreboard'))}
			onDragEnd={() => dispatch(dragEndHandler())}
			onDoubleClick={doubleClick}
			style={{ top: position }}
		>
			<div className={cls.scoreboard}>
				<span className={`${cls.text} ${modeText ? cls.text__small : ''}`}>{score()}</span>
			</div>
		</div>
	);
};

export default Scoreboard;
