import { createContext } from 'react';

const Root = document ? document.getElementById('root') : null;

const AccountContext = createContext(
  { account_id: Root ? Root.getAttribute('data-account-id') : null }
);

AccountContext.displayName = 'AccountContext';

export default AccountContext;
