import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

const fake = require('faker');

import Search from '../../app/javascript/components/Search';
import AccountContext from '../../app/javascript/context/AccountContext';

let output;

beforeEach(() => {
  output = shallow(
    <AccountContext.Provider value={{ account_id: fake.random.uuid() }}>
      <Search />
    </AccountContext.Provider>
  );
});

describe('Search', () => {
  it('renders a Search component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
