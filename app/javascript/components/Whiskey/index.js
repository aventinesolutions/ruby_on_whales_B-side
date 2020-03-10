import React from 'react';
import './styles.scss';

export default ({ id, description, price, photoUrl }) => (
	<div className='whiskey-container' key={id}>
		<div className='whiskey-description'>{description}</div>
		<div className='whiskey-price'>Price: <span>{price}</span></div>
		<div className='animated bounce'>
			<img className='whiskey-photo' src={photoUrl} alt='whiskey photo' />
		</div>
	</div>
);
