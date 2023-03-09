import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragEndHandler, dragStartHandler } from '../../redux/features/dragSlice';

import cls from './Scoreboard.module.css';

const Scoreboard = ({ doubleClick, locatedOnCanvas, position }) => {
	const dispatch = useDispatch();
	const { scoreboard } = useSelector(state => state.drag.value);

	return (
		<div
			className={`${cls.wrapper} ${locatedOnCanvas ? cls.notActive : ''} ${
				scoreboard.isMounted ? cls.mountedBox : ''
			}`}
			draggable={!scoreboard.isMounted}
			onDragStart={e => dispatch(dragStartHandler('scoreboard'))}
			onDragEnter={e => {}}
			onDragEnd={() => dispatch(dragEndHandler())}
			onDoubleClick={doubleClick}
			style={{ top: position?.top }}
		>
			<div className={cls.scoreboard}>
				<span className={cls.text}>0</span>
			</div>
		</div>
	);
};

export default Scoreboard;
