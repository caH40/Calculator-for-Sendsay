import React from 'react';
import Canvas from './Components/Canvas/Canvas';
import Sidebar from './Components/Sidebar/Sidebar';
import Switch from './Components/Switch/Switch';
import './css/App.css';

const App = () => {
	return (
		<div className="container">
			<div className="wrapper">
				<Switch />
				<Canvas />
				<Sidebar />
			</div>
		</div>
	);
};

export default App;
