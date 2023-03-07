import React from 'react';

import cls from './Button.module.css';

const Button = ({ children, size, type }) => {
	return <button className={`${cls.btn} ${cls[type]} ${cls[size]} `}>{children}</button>;
};

export default Button;
