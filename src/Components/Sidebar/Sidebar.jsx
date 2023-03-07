import React from 'react';
import Math from '../Math/Math';
import Numbers from '../Numbers/Numbers';
import Result from '../Result/Result';
import Scoreboard from '../Scoreboard/Scoreboard';

import cls from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<div className={cls.wrapper}>
			<Scoreboard />
			<Math />
			<Numbers />
			<Result />
		</div>
	);
};

export default Sidebar;
