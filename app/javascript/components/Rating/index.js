import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import Ratings from 'react-ratings-declarative';

const ratingsMapping = {
  no_stars: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};

const Rating = ({ id, quality, ratings }) => {
  const [rating, setRating] = useState(() =>{
    const existing = ratings.find(r => r.quality === quality);
    if (existing)
      return ratingsMapping[existing['stars']];
    return 0;
  });

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
  quality: PropTypes.string,
  ratings: PropTypes.array
};

export default Rating;
