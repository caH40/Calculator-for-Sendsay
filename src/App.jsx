import React from 'react';
import Canvas from './Components/Canvas/Canvas';
import Switch from './Components/Switch/Switch';
import './css/App.css';

const App = () => {
	return (
		<div className="container">
			<div className="wrapper">
				<Switch />
				<Canvas />
			</div>
		</div>
	);
};

export default App;
