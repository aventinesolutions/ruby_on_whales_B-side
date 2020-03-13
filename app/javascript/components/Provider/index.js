import React from 'react';
import PropTypes from 'prop-types';

import { ApolloProvider } from 'react-apollo';
import { createCache, createClient } from '../../utils/apollo';

const Provider = ({ children }) =>
  <ApolloProvider client={createClient(createCache())}>
    {children}
  </ApolloProvider>
;

Provider.displayName = 'Provider';
Provider.propTypes = {
  children: PropTypes.node
};

export default Provider;
