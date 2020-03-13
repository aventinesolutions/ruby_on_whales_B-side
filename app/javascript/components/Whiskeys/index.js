import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Whiskey from '../Whiskey';
import gql from 'graphql-tag';
import './styles.scss';

const WhiskeysQuery = gql`
  {
    whiskeys {
      id
      title
      description
      price
      photoUrl
    }
  }`;

const Whiskeys = () =>
  <Query query={WhiskeysQuery}>
    {({ data, loading }) =>
      <div className='whiskeys-container'>
        {loading ? 'loading ...' :
          data.whiskeys.map(whiskey => <Whiskey key={whiskey.id} {...whiskey} />)}
      </div>
    }
  </Query>
;

Whiskeys.displayName = 'Whiskeys';
Whiskeys.propTypes = {
  children: PropTypes.node
};

export default Whiskeys;
