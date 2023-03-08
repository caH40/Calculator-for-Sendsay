import React from 'react';

import Button from '../UI/Button/Button';
import cls from './Math.module.css';

const Math = () => {
	return (
		<div className={cls.wrapper} draggable={true}>
			<Button>/</Button>
			<Button>x</Button>
			<Button>-</Button>
			<Button>+</Button>
		</div>
	);
};

export default Math;
