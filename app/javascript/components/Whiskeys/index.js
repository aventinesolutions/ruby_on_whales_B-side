import React from 'react';
import { Query } from 'react-apollo';
import Whiskey from '../Whiskey';
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

const Whiskeys = () =>
  <Query query={WhiskeysQuery}>
    {({ data, loading }) =>
      <div className='whiskeys-container'>
        {loading ? 'loading ...' : data.whiskeys.map(whiskey => <Whiskey {...whiskey} />)}
      </div>
    }
  </Query>
;

Whiskeys.displayName = 'Whiskeys';

export default Whiskeys;
