import React from 'react';
import { useSelector } from 'react-redux';

import cls from './Button.module.css';

const Button = ({ children, size, type, getClick }) => {
	const { isRuntime } = useSelector(state => state.mode);

	return (
		<button
			className={`${cls.btn} ${cls[type]} ${cls[size]}`}
			onClick={isRuntime ? () => getClick(children) : undefined}
		>
			{children}
		</button>
	);
};

export default Button;
