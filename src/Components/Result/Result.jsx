import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragEndHandler, dragStartHandler } from '../../redux/features/dragSlice';

import Button from '../UI/Button/Button';
import cls from './Result.module.css';

const Result = ({ doubleClick, locatedOnCanvas, position }) => {
	const dispatch = useDispatch();
	const { result } = useSelector(state => state.drag);
	return (
		<div
			className={`${cls.wrapper} ${locatedOnCanvas ? cls.notActive : ''} ${
				result.isMounted ? cls.mountedBox : ''
			}`}
			draggable={!result.isMounted}
			onDragStart={e => {
				dispatch(dragStartHandler('result'));
			}}
			onDragEnter={e => {
				e.stopPropagation();
			}}
			onDragEnd={() => dispatch(dragEndHandler())}
			onDoubleClick={doubleClick}
			style={{ top: position }}
		>
			<Button size="big" type="result">
				=
			</Button>
		</div>
	);
};

export default Result;
