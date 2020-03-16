import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
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

const ratingToString = rating => {
  return Object.keys(ratingsMapping).filter(key => ratingsMapping[key] === rating)[0];
};

const Rating = ({ id, quality, ratings, account_id }) => {
  const [rating, setRating] = useState(() => {
    const existing = ratings.find(r => r.quality === quality);
    if (existing)
      return ratingsMapping[existing['stars']];
    return 0;
  });
  const query = () => {
    return gql`
      mutation variables($rating: String!){
        rateWhiskey(accountId: "${account_id}",
          whiskeyId: "${id}",
          quality: "${quality}",
          stars: $rating) {
          id
          quality
          stars
        }
      }
    `;
  };
  const [rateWhiskey] = useMutation(query(), {
    variables: { rating: ratingToString(rating) },
    ignoreResults: true
  });

  useEffect(function() { rateWhiskey(); });

  return (
    <div key={`${id}-${quality}`} className="stars-container">
      <h3>{quality}</h3>
      <Ratings
        rating={rating}
        changeRating={setRating}
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
  ratings: PropTypes.array,
  account_id: PropTypes.string
};

export default Rating;
