import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { fake } from 'faker';

import Search from '../../app/javascript/components/Search';
import AccountContext from '../../app/javascript/context/AccountContext';

describe('Search', () => {
  it('renders a Search component', () => {
    const output = shallow(
      <AccountContext.Provider value={{ account_id: fake("random:uuid") }}>
        <Search />
      </AccountContext.Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
