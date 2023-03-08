import React from 'react';

import Button from '../UI/Button/Button';
import cls from './Numbers.module.css';

const Numbers = () => {
	return (
		<div className={cls.wrapper} draggable={true}>
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
