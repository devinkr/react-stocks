import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import StockDetails from './components/StockDetails';
import About from './components/About';
import Dashboard from './components/Dashboard';

function App() {
	return (
		<div className='App'>
			<h1>App</h1>
			<Dashboard />
			<About />
			<StockDetails />
		</div>
	);
}

export default App;
