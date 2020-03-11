import React, { useState } from 'react';
import './styles.scss';

export default ({ photoUrl }) => {
	const [state, setState] = useState('...');

	return (
		<div>
			<img
				className='whiskey-photo-placeholder'
				alt='image-placeholder'
				src={photoUrl}
				onLoad={() => setState('loaded')}
				onError={() => setState('unable to load photo')}
			/>
			{state === 'loaded' ? <img alt='whiskey photo' className='whiskey-photo animated bounce' src={photoUrl} /> : state}
		</div>
	);
};
