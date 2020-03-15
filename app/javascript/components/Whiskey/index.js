import React from 'react';
import PropTypes from 'prop-types';

import ReactImageAppear from 'react-image-appear';
import StarRatingComponent from 'react-star-rating-component';
import './styles.scss';

const Whiskey = ({ id, title, description, price, photoUrl }) =>
  <div className='whiskey-container' key={id}>
    <h2 className='whiskey-title'>{title}</h2>
    <div className='whiskey-description'>{description}</div>
    <div className='whiskey-price'>Price: <span>{price}</span></div>
    <ReactImageAppear
      className="whiskey-photo"
      src={photoUrl}
      placeholder
      animation='bounceInDown'
      animationDuration='2s'
    />
    <div className="ratings-container">
      {
        ['taste', 'color', 'smokiness'].map(quality =>
          <div key={`${id}-${quality}`} className="stars-container">
            <h3>{quality}</h3>
            <StarRatingComponent name={`${id}-${quality}`} />
          </div>
        )
      }
    </div>
  </div>
;

Whiskey.displayName = 'Whiskey';
Whiskey.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  photoUrl: PropTypes.string
};

export default Whiskey;
