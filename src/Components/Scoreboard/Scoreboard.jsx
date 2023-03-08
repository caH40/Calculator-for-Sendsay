import React from 'react';

import cls from './Scoreboard.module.css';

const Scoreboard = () => {
	return (
		<div className={cls.wrapper} draggable={true} onDrag={e => console.log(e.clientX, e.clientY)}>
			<div className={cls.scoreboard}>
				<span className={cls.text}>0</span>
			</div>
		</div>
	);
};

export default Scoreboard;
