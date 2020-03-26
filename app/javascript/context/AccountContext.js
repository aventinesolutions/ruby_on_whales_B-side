import { createContext } from 'react';

const Root = document ? document.getElementById('root') : null;

export const AccountContext = createContext(
  { account_id: Root ? Root.getAttribute('data-account-id') : null }
);
