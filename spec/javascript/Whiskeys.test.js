import React from 'react';
import gql from 'graphql-tag';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Whiskeys from '../../app/javascript/components/Whiskeys';

const query = gql`
  {
    search(filter: {accountId: "c6fc5f72-6d50-4111-856e-c07eadbaef6b",
      text: "handcrafted",
      ratingsFilter: ""
    }) {
      id
      title
      description
      price
      photoUrl
      ratings {
        id
        accountId
        quality
        stars
      }
    }
  }
`;

let output;

beforeEach(() => {
  output = shallow(
    <Whiskeys query={query}/>
  );
});

describe('Whiskeys', () => {
  it('renders a Whiskeys component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
