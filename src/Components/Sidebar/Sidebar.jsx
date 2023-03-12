import React from 'react';
import { useSelector } from 'react-redux';
import Math from '../Math/Math';
import Numbers from '../Numbers/Numbers';
import Result from '../Result/Result';

import Scoreboard from '../Scoreboard/Scoreboard';
import cls from './Sidebar.module.css';

const Sidebar = () => {
	const { isRuntime } = useSelector(state => state.mode);
	const { scoreboard, math, numbers, result } = useSelector(state => state.drag);

	return (
		<>
			{isRuntime ? (
				<div className={cls.wrapper} />
			) : (
				<div className={cls.wrapper}>
					<Scoreboard locatedOnCanvas={scoreboard.isMounted} />
					<Math locatedOnCanvas={math.isMounted} />
					<Numbers locatedOnCanvas={numbers.isMounted} />
					<Result locatedOnCanvas={result.isMounted} />
				</div>
			)}
		</>
	);
};

export default Sidebar;
