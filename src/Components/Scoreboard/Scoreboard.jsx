import React from 'react';

import cls from './Scoreboard.module.css';

const Scoreboard = () => {
	return (
		<div className={cls.wrapper}>
			<div className={cls.scoreboard}>
				<span className={cls.text}>0</span>
			</div>
		</div>
	);
};

export default Scoreboard;
