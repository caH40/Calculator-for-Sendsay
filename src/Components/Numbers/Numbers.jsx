import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumber } from '../../redux/features/calculatorSlice';
import { dragEndHandler, dragStartHandler } from '../../redux/features/dragSlice';

import Button from '../UI/Button/Button';
import cls from './Numbers.module.css';

const Numbers = ({ doubleClick, locatedOnCanvas, position }) => {
	const dispatch = useDispatch();
	const { numbers } = useSelector(state => state.drag);

	const getClick = key => dispatch(setNumber(key));
	return (
		<div
			className={`${cls.wrapper} ${locatedOnCanvas ? cls.notActive : ''} ${
				numbers.isMounted ? cls.mountedBox : ''
			}`}
			draggable={!numbers.isMounted}
			onDragStart={e => {
				dispatch(dragStartHandler('numbers'));
			}}
			onDragEnter={e => {
				e.stopPropagation();
			}}
			onDragEnd={() => dispatch(dragEndHandler())}
			onDoubleClick={doubleClick}
			style={{ top: position }}
		>
			<Button size="medium" getClick={getClick}>
				7
			</Button>
			<Button size="medium" getClick={getClick}>
				8
			</Button>
			<Button size="medium" getClick={getClick}>
				9
			</Button>
			<Button size="medium" getClick={getClick}>
				4
			</Button>
			<Button size="medium" getClick={getClick}>
				5
			</Button>
			<Button size="medium" getClick={getClick}>
				6
			</Button>
			<Button size="medium" getClick={getClick}>
				3
			</Button>
			<Button size="medium" getClick={getClick}>
				2
			</Button>
			<Button size="medium" getClick={getClick}>
				1
			</Button>
			<Button size="double" getClick={getClick}>
				0
			</Button>
			<Button size="medium" getClick={getClick}>
				,
			</Button>
		</div>
	);
};

export default Numbers;
