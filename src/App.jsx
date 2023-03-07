import React, { useState } from 'react';
import Canvas from './Components/Canvas/Canvas';
import Sidebar from './Components/Sidebar/Sidebar';
import Switch from './Components/Switch/Switch';
import './css/App.css';

const App = () => {
	const [mode, setMode] = useState('constructor');

	return (
		<div className="container">
			<div className="wrapper">
				<div className="empty" />
				<Switch mode={mode} setMode={setMode} />
				<Sidebar />
				<Canvas />
			</div>
		</div>
	);
};

export default App;
