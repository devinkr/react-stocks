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
			<nav>
				<ul>
					<li>
						<Link to='/react-stocks/'>Home</Link>
					</li>
					<li>
						<Link to='/react-stocks/about'>About</Link>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path='/react-stocks' element={<Dashboard stocks={stocks} />} />
				<Route
					path='/react-stocks/stocks'
					element={<Dashboard stocks={stocks} />}
				/>
				<Route path='/react-stocks/about' element={<About />} />
				<Route
					path='/react-stocks/stocks/:symbol'
					element={<StockDetails stocks={stocks} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
