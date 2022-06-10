import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function StockDetails({ stocks }) {
	const [stock, setStock] = useState(null);
	const { symbol } = useParams();

	useEffect(() => {
		let url = `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${process.env.REACT_APP_IEX_KEY}`;

		axios
			.get(url)
			.then((data) => {
				setStock(data.data);
			})
			.catch(console.error);
	}, []);

	if (!stock) {
		return;
	}

	return (
		<div className='list'>
			<ul>
				<h1>{stock.companyName}</h1>
				<li>Symbol: {stock.symbol}</li>
				<li>Last Price: {stock.lastPrice}</li>
				<li>High: {stock.high}</li>
				<li>Low: {stock.low}</li>
				<li>Open: {stock.open}</li>
				<li>Change: {stock.change}</li>
				<li>Previous Close: {stock.previousClose}</li>
			</ul>
		</div>
	);
}

export default StockDetails;
