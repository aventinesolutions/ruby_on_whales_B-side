import React from 'react';
import WhiskeyPhoto from '../WhiskeyPhoto';
import './styles.scss';

export default ({ id, description, price, photoUrl }) => (
	<div className='whiskey-container' key={id}>
		<div className='whiskey-description'>{description}</div>
		<div className='whiskey-price'>Price: <span>{price}</span></div>
		<WhiskeyPhoto key={id} id={id} photoUrl={photoUrl} />
	</div>
);
