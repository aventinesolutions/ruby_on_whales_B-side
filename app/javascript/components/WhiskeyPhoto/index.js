import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import './styles.scss';

export default ({ id, photoUrl }) => {
	const [state, setState] = useState('...');
	const [show, setShow] = useState(false);

	const transitions = useTransition(show, null, {
		from: { transform: 'translate3d(0,-20em,0)' },
		enter: { transform: 'translate3d(0,0em,0)' },
		trail: 3000,
		unique: true
	});

	return (
		<div>
			<img
				className='whiskey-photo-placeholder'
				alt='image-placeholder'
				src={photoUrl}
				onLoad={() => {
					setState('loaded');
					setShow(true);
				}}
				onError={() => setState('unable to load photo')}
			/>
			{show ?
				transitions.map(({ item, key, props }) => {
						return item && (
							<animated.div key={key} style={props}>
								<img alt='whiskey photo' className='whiskey-photo' src={photoUrl} />
							</animated.div>
						)
					}
				)
				: state}
		</div>
	);
};
