import React from 'react';
import {isShowOnPage} from '../Helpers/Constants/constants';

import FilterSort from '../FilterSort/FilterSort';
import ItemsList from '../ItemsList/ItemsList';

// TODO: add sortFilter buttons functionallity with useContext

const Favorites = () => {
	return (
		<>
			{isShowOnPage.favorites.filterSort && <FilterSort/>}
			<ItemsList/>
		</>
	)
}

export default Favorites;