import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Whiskeys from '../components/Whiskeys';

render(
	<Provider>
		<Whiskeys />
	</Provider>, document.querySelector('#root'));
