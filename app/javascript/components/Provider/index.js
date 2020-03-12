import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { createCache, createClient } from '../../utils/apollo';

const Provider = ({ children }) =>
  <ApolloProvider client={createClient(createCache())}>
    {children}
  </ApolloProvider>
;

Provider.displayName = 'Provider';

export default Provider;
