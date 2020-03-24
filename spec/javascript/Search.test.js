import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { fake } from 'faker';

import { MockedProvider } from '@apollo/react-testing';
import Search from '../../app/javascript/components/Search';

describe('Search', () => {
  it('renders a Search component', () => {
    const output = shallow(
      <MockedProvider>
        <Search />
      </MockedProvider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
