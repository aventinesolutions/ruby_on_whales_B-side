import React from 'react';
import './setupTests';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { MockedProvider } from '@apollo/react-testing';
import Rating from '../../app/javascript/components/Rating';

describe('Rating', () => {
  it('renders a Rating component', () => {
    const output = shallow(
      <MockedProvider>
        <Rating ratings={[]} />
      </MockedProvider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
