import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import Whiskey from '../Whiskey';

const Whiskeys = ({ query, variables }) =>
  <Query query={query} variables={variables}>
    {({ data, loading }) =>
      <>
        {loading ? 'loading ...' :
          data.search.map(whiskey => <Whiskey key={whiskey.id} {...whiskey} />)}
      </>
    }
  </Query>
;

Whiskeys.displayName = 'Whiskeys';
Whiskeys.propTypes = {
  children: PropTypes.node,
  query: PropTypes.object,
  variables: PropTypes.object
};

export default Whiskeys;
