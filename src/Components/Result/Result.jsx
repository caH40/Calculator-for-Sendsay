import React from 'react';

import Button from '../UI/Button/Button';
import cls from './Result.module.css';

const Result = () => {
	return (
		<div className={cls.wrapper} draggable={true}>
			<Button size="big" type="result">
				=
			</Button>
		</div>
	);
};

export default Result;
