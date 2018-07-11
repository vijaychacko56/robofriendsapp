import  React from 'react';
import Cards from '../Cards/Cards'

const CardList = (props) => {

	const cardArray = props.robots.map((user,index) => {
			return <Cards key ={index} user={user} />
	})

return(
		<div>
			{cardArray}
		</div>
	);

}


export default CardList;