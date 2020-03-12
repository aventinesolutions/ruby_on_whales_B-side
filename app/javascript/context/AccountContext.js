import { createContext } from 'react';

export const AccountContext = createContext(
	{ account_id: document.getElementById('root').getAttribute('data-account-id') }
);
