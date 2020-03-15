import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Whiskey from '../Whiskey';
import './styles.scss';

const Whiskeys = ({ query }) =>
  <Query query={query}>
    {({ data, loading }) =>
      <div className='whiskeys-container'>
        {loading ? 'loading ...' :
          data.search.map(whiskey => <Whiskey key={whiskey.id} {...whiskey} />)}
      </div>
    }
  </Query>
;

Whiskeys.displayName = 'Whiskeys';
Whiskeys.propTypes = {
  children: PropTypes.node,
  query: PropTypes.string
};

export default Whiskeys;
