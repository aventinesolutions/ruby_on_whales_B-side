import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { fake } from 'faker';

import { MockedProvider } from '@apollo/react-testing';
import Rating from '../../app/javascript/components/Rating';

describe('Rating', () => {
  it('renders a Rating component', () => {
    const output = shallow(
      <MockedProvider>
        <Rating
          id={fake("random.uuid")}
          quality="taste"
          ratings={[{ quality: 'taste', stars: 'three' }]}
          account_id={fake("random.uuid")} />
      </MockedProvider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
