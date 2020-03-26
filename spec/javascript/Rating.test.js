import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { MockedProvider } from '@apollo/react-testing';
import Rating from '../../app/javascript/components/Rating';

let output;

beforeEach(() => {
  output = shallow(
    <MockedProvider>
      <Rating
        id="0feeb520-8384-4985-b631-0127ddb56a47"
        quality="taste"
        ratings={[{ quality: 'taste', stars: 'three' }]}
        account_id="7eac9c4e-90e1-428b-bda8-0203b75dd0ed" />
    </MockedProvider>
  );
});

describe('Rating', () => {
  it('renders a Rating component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
