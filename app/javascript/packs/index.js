import React from 'react';
import { render } from 'react-dom';
import Provider from '../components/Provider';
import Search from '../components/Search';

render(
  <Provider>
    <Search />
  </Provider>, document.querySelector('#root'));
