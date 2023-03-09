import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	dragDropHandler,
	dragLeaveHandler,
	dragOverHandler,
	getDoubleClick,
} from '../../redux/features/dragSlice';
import Scoreboard from '../Scoreboard/Scoreboard';

import cls from './Canvas.module.css';

const Canvas = () => {
	const { scoreboard, math, numbers, result, draggedElement, isOverCanvas } = useSelector(
		state => state.drag.value
	);
	const isMountedElements =
		scoreboard.isMounted || math.isMounted || numbers.isMounted || result.isMounted;
	const dispatch = useDispatch();

	return (
		<div
			onDrop={e => {
				e.preventDefault();
				dispatch(dragDropHandler({ draggedElement, position: scoreboard.position }));
			}}
			onDragOver={e => {
				e.preventDefault();
				dispatch(dragOverHandler(e.clientY - 90));
			}}
			onDragLeave={() => dispatch(dragLeaveHandler())}
			className={cls.wrapper}
			style={{ background: isOverCanvas ? '#F0F9FF' : '#ffffff' }}
		>
			{scoreboard.isMounted ? (
				<Scoreboard
					doubleClick={() => dispatch(getDoubleClick({ scoreboard: { isMounted: false } }))}
					position={scoreboard.position}
				/>
			) : undefined}

			{isMountedElements ? undefined : (
				<>
					<svg
						className={cls.icon}
						width="22"
						height="22"
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M18.7778 1V5.44444" stroke="black" strokeWidth="2" strokeLinecap="round" />
						<path
							d="M21 3.22222L16.5556 3.22222"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<path
							d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333"
							stroke="black"
							strokeWidth="2"
							strokeLinecap="round"
						/>
						<circle cx="12.1111" cy="7.66667" r="0.555556" fill="black" />
					</svg>
					<p className={cls.text__main}>Перетащите сюда</p>
					<div className={cls.text__block}>любой элемент из левой панели</div>
				</>
			)}
		</div>
	);
};

export default Canvas;
