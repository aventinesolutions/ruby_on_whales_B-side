import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Rating = ({ id, quality }) => {
  return (
    <div key={`${id}-${quality}`} className="stars-container">
      <h3>{quality}</h3>
    </div>
  );
};

Rating.displayName = "Rating";
Rating.propTypes = {
  id: PropTypes.string,
  quality: PropTypes.string
};

export default Rating;
