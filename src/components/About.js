import React from 'react';

function About(props) {
	return (
		<div className='list'>
			<h2>React Stocks App</h2>
			<p>
				This app was built by Devin, Meesum, and Isaac. It gets up to date stock
				data from the IEX API. Follow the stock links listed on the dashboard or
				type a stock symbol into the url in the form of /stocks/symbol
			</p>
		</div>
	);
}

export default About;
