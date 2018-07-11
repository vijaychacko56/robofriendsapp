import React from 'react';
import './Cards.css';

const Cards  = (props) => {

	return(
			<article  className="mw5 dib ma2 cusbkgd br3 pa3 pa4-ns mv3 ba b--black-10 shadow-5 grow">
				  <div className="tc">
				    <img src={`https://robohash.org/${props.user.id}?200x200`} className="br-100 h4 w4 dib ba b--black-50 pa2" alt="robohash images"/>
				    <div className = "dib">
					    <h3 className="f4 mb2 ">{props.user.name}</h3>
					    <p className="f6 fw4 gray mt0">{props.user.email}</p>
				    </div>
	  			  </div>
			</article>
		);
}

export default Cards;