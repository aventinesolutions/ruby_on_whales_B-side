import React, { useState } from 'react';
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
  const [ratingId, setRatingId] = useState(null);

  const [rateWhiskey] = useMutation(gql`
    mutation variables(
      $accountId: String!,
      $id: String!,
      $quality: String!,
      $stars: String!){
      rateWhiskey(
        accountId: $accountId,
        whiskeyId: $id,
        quality: $quality,
        stars: $stars
      ) {
        id
        quality
        stars
      }
    }
  `, {
    variables: {
      accountId: account_id,
      id: id,
      quality: quality,
      stars: ratingToString(rating)
    },
    ignoreResults: true
  });

  async function updateRating(newRating) {
    await setRating(newRating);
    await rateWhiskey().then(({ data }) => setRatingId(data['rateWhiskey']['id']));
  }

  return (
    <div key={`${id}-${quality}`} className="stars-container">
      <h3>{quality}</h3>
      <Ratings
        rating={rating}
        changeRating={(newRating) => updateRating(newRating)}
        widgetDimensions='1em'
        widgetSpacings='0'
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
      <div className="rating-id">{ratingId}</div>
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
