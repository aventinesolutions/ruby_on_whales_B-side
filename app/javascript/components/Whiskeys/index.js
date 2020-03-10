import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './styles.scss';

const WhiskeysQuery = gql`
  {
    whiskeys {
      id
      description
      price
      photoUrl
    }
  }`;

export default () => (
	<Query query={WhiskeysQuery}>
		{({ data, loading }) => (
			<div className='whiskeys-container'>
				{loading ? 'loading ...'
					: data.whiskeys.map(({ id, description, price, photoUrl }) =>
						<div className='whiskey-container' key={id}>
							<div className='whiskey-description'>{description}</div>
							<div className='whiskey-price'>Price: <span>{price}</span></div>
							<img className='whiskey-photo' src={photoUrl} alt='whiskey photo' />
						</div>
					)
				}
			</div>
		)}
	</Query>
);
