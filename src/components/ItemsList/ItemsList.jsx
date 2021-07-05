import React from 'react';

import './ItemsList.css';

import { sortOptions, viewOptions } from '../Helpers/Constants/constants';

const ItemsList = ({sortState, viewState}) => {
	let posts = [
		{id: 1, price: 40, favorite: false},
		{id: 2, price: 80, favorite: true},
		{id: 3, price: 120, favorite: false},
		{id: 4, price: 500, favorite: false},
		{id: 5, price: 20, favorite: true},
		{id: 6, price: 55, favorite: true},
		{id: 7, price: 39, favorite: false},
		{id: 8, price: 90, favorite: false}
	]
	let sortedLowFirst = posts.sort((a,b) => a.price - b.price);
	let sortedHighFirst = posts.sort((a,b) => b.price - a.price);

	const sortArray = (array) => {
		return array.map(el => (
			<div className="item r5">
				<div className="img">image #{el.id}</div>
				<div className="buttons">
					<div className={`favorite ${el.favorite ? 'added' : 'removed'}`}>
						<i className="fa fa-heart-o hover" aria-hidden="true"></i>
					</div>
					<p className="price">{el.price}$</p>
					<div className="order">
						<i className="fa fa-minus hover" aria-hidden="true"></i>
						<p className="counter">0</p>
						<i className="fa fa-plus hover" aria-hidden="true"></i>
					</div>
				</div>
			</div>
		))
	}

	return (
		<div className={`list ${viewState === viewOptions.little ? 'little' : 'many'}`}>
			{sortState === sortOptions.lowFirst
				? sortArray(sortedLowFirst)
				: sortArray(sortedHighFirst)}
		</div>
	)
}

export default ItemsList;