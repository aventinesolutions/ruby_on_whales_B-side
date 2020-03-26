import React from 'react';
import gql from 'graphql-tag';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { fake } from 'faker';

import Whiskeys from '../../app/javascript/components/Whiskeys';

describe('Whiskeys', () => {
  it('renders a Whiskeys component', () => {
    const output = shallow(
      <Whiskeys query={gql`
              {
                 search(filter: {accountId: "${fake('random:uuid')}", 
                                 text: "${fake('commerce:productName')}",
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
          `}/>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
