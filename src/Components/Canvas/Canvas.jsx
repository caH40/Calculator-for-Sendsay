import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	dragDropHandler,
	dragLeaveHandler,
	dragOverHandler,
	getDoubleClick,
} from '../../redux/features/dragSlice';
import Math from '../Math/Math';
import Numbers from '../Numbers/Numbers';
import Scoreboard from '../Scoreboard/Scoreboard';
import Result from '../Result/Result';

import cls from './Canvas.module.css';

const Canvas = () => {
	const { scoreboard, math, numbers, result, draggedElement, isOverCanvas } = useSelector(
		state => state.drag.value
	);

	const dispatch = useDispatch();

	const isMountedElements =
		scoreboard.isMounted || math.isMounted || numbers.isMounted || result.isMounted;

	const overClass = isOverCanvas && !isMountedElements ? 'box__first' : 'box__none';

	const positionForInsert =
		68 + (math.isMounted ? 64 : 0) + (numbers.isMounted ? 232 : 0) + (result.isMounted ? 80 : 0);
	console.log({ positionForInsert });
	const styleInsert = () => {
		if (draggedElement && draggedElement !== 'scoreboard')
			return { display: 'block', top: `${positionForInsert}px` };

		if (draggedElement && draggedElement === 'scoreboard')
			return { display: 'block', top: '0px' };

		return { display: 'none' };
	};

	const borderCanvas = isMountedElements ? 'border__none' : '';

	return (
		<div
			onDrop={e => {
				e.preventDefault();
				dispatch(dragDropHandler({ draggedElement, position: positionForInsert }));
			}}
			onDragOver={e => {
				e.preventDefault();
				dispatch(dragOverHandler(e.clientY - 90));
			}}
			onDragLeave={() => dispatch(dragLeaveHandler())}
			className={`${cls.wrapper} ${cls[overClass]} ${cls[borderCanvas]}`}
		>
			{scoreboard.isMounted ? (
				<Scoreboard
					doubleClick={() => dispatch(getDoubleClick({ scoreboard: { isMounted: false } }))}
					position={scoreboard.position}
				/>
			) : undefined}

			{math.isMounted ? (
				<Math
					doubleClick={() => dispatch(getDoubleClick({ math: { isMounted: false } }))}
					position={math.position}
				/>
			) : undefined}

			{numbers.isMounted ? (
				<Numbers
					doubleClick={() => dispatch(getDoubleClick({ numbers: { isMounted: false } }))}
					position={numbers.position}
				/>
			) : undefined}

			{result.isMounted ? (
				<Result
					doubleClick={() => dispatch(getDoubleClick({ result: { isMounted: false } }))}
					position={result.position}
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

			<svg
				className={cls.line__insert}
				style={styleInsert()}
				width="250"
				height="6"
				viewBox="0 0 250 6"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0.113249 3L3 5.88675L5.88675 3L3 0.113249L0.113249 3ZM249.887 3L247 0.113249L244.113 3L247 5.88675L249.887 3ZM3 3.5H247V2.5H3V3.5Z"
					fill="#5D5FEF"
				/>
			</svg>
		</div>
	);
};

export default Canvas;
