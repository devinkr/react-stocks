import './App.css';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import StockDetails from './components/StockDetails';
import stockData from './data/stock-data.json';

// process.env.REACT_APP_IEX_KEY
function App() {
	const [stocks, setStocks] = useState(stockData);
	return (
		<div className='App'>
			<header>
				<Link to='/'>
					<h1>React Stocks</h1>
				</Link>

				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
					</ul>
				</nav>
			</header>
			<Routes>
				<Route path='/' element={<Dashboard stocks={stocks} />} />
				<Route path='/stocks' element={<Dashboard stocks={stocks} />} />
				<Route path='/about' element={<About />} />
				<Route
					path='/stocks/:symbol'
					element={<StockDetails stocks={stocks} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
