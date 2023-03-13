import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMathSign } from '../../redux/features/calculatorSlice';
import { dragEndHandler, dragStartHandler } from '../../redux/features/dragSlice';

import Button from '../UI/Button/Button';
import cls from './Math.module.css';

const Math = ({ doubleClick, locatedOnCanvas, position }) => {
	const dispatch = useDispatch();
	const { math } = useSelector(state => state.drag);

	const getClick = key => dispatch(setMathSign(key));

	return (
		<div
			className={`${cls.wrapper} ${locatedOnCanvas ? cls.notActive : ''} ${
				math.isMounted ? cls.mountedBox : ''
			}`}
			draggable={!math.isMounted}
			onDragStart={e => {
				dispatch(dragStartHandler('math'));
			}}
			onDragEnter={e => {
				e.stopPropagation();
			}}
			onDragEnd={() => dispatch(dragEndHandler())}
			onDoubleClick={doubleClick}
			style={{ top: position }}
		>
			<Button getClick={getClick}>/</Button>
			<Button getClick={getClick}>x</Button>
			<Button getClick={getClick}>-</Button>
			<Button getClick={getClick}>+</Button>
		</div>
	);
};

export default Math;
