import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Ratings from 'react-ratings-declarative';

const Rating = ({ id, quality }) => {
  const [rating, setRating] = useState(0);

  return (
    <div key={`${id}-${quality}`} className="stars-container">
      <h3>{quality}</h3>
      <h4>Rating: {rating}</h4>
      <Ratings
        rating={rating}
        changeRating={(rating) => setRating(rating)}
        widgetDimensions='1em'
        widgetSpacings='0'
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    </div>
  );
};

Rating.displayName = "Rating";
Rating.propTypes = {
  id: PropTypes.string,
  quality: PropTypes.string
};

export default Rating;
