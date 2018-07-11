import React from 'react';

const SearchBox = (props) => {

return (
	<div className = "pa2">
		<input  className = "bg-lightest-blue pa3 ba b--green" onChange = {props.searchInput} type ='search' placeholder ="Search Bots Here" />
	</div>
	);


}

export default SearchBox;
