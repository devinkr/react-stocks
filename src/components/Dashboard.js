import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ stocks, title }) {
	useEffect(() => {
		document.title = 'Dashboard | React Stocks';
	}, []);

	return (
		<div className='list'>
			<h1>Dashboard</h1>
			<ul>
				{stocks.map((stock, index) => {
					return (
						<li key={index}>
							<Link to={`/stocks/${stock.symbol}`}>
								{stock.name} - {stock.symbol}
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Dashboard;
