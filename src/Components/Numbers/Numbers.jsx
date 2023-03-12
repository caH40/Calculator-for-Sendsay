import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dragEndHandler, dragStartHandler } from '../../redux/features/dragSlice';

import Button from '../UI/Button/Button';
import cls from './Numbers.module.css';

const Numbers = ({ doubleClick, locatedOnCanvas, position }) => {
	const dispatch = useDispatch();
	const { numbers } = useSelector(state => state.drag);
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
			<Button size="medium">7</Button>
			<Button size="medium">8</Button>
			<Button size="medium">9</Button>
			<Button size="medium">4</Button>
			<Button size="medium">5</Button>
			<Button size="medium">6</Button>
			<Button size="medium">3</Button>
			<Button size="medium">2</Button>
			<Button size="medium">1</Button>
			<Button size="double">0</Button>
			<Button size="medium">,</Button>
		</div>
	);
};

export default Numbers;
