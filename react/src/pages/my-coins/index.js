import React, { PropTypes } from "react";

class MyCoins extends React.Component {
	render() {
		return (
			<div className="coins-page">
				<h1>My Coin Collection</h1>
				<article>
					<h3>Add a coin</h3>
					<p>Not yet implemented</p>
					<button disabled={true}>Add Coin</button>
				</article>
				<article>
					<h3>Coins</h3>
					<table>
						<thead>
						<tr>
							<th>Variety</th>
							<th>Year</th>
							<th>Mint</th>
							<th>Quality</th>
							<th>Quantity</th>
							<th>Images</th>
							<th>Note</th>
						</tr>
						</thead>
					</table>
				</article>
			</div>
		);
	}
}

MyCoins.propTypes = {
	data: PropTypes.object,
};

export default MyCoins;