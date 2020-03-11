import React, { useState } from 'react';
import './styles.scss';

export default ({ photoUrl }) => {
	const [state, setState] = useState('...');

	return (
		<div>
			<img
				alt={state}
				className='whiskey-photo'
				src={photoUrl}
				onLoad={ () => setState(null) }
				onError={ () => setState('unable to load photo') }
			/>
		</div>
	);
};
