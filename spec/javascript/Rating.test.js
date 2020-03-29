import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

import { MockedProvider } from '@apollo/react-testing';
import Rating, { RATING_MUTATION_QUERY } from '../../app/javascript/components/Rating';

const wait = require('waait');

describe('shallow rendering Rating', () => {
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

  it('renders a Rating component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('reacts to changes of Ratings', () => {
  let component;
  let mocks;
  let mutationCalled;

  beforeEach(() => {
    mutationCalled = false;
    mocks = [
      {
        request: {
          query: RATING_MUTATION_QUERY,
          variables: {
            id: "f917c964-f2a1-496e-87db-6a9cf1bcf9c1",
            accountId: "abb6995b-276e-4f56-8210-235478dee7bc",
            quality: "taste",
            stars: "five"
          }
        },
        result: () => {
          mutationCalled = true;
          return {
            data: {
              rateWhiskey: {
                id: "f917c964-f2a1-496e-87db-6a9cf1bcf9c1",
                quality: "taste",
                stars: "five"
              }
            }
          };
        }
      }
    ];
    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Rating
          id="f917c964-f2a1-496e-87db-6a9cf1bcf9c1"
          quality="taste"
          ratings={[{ quality: 'taste', stars: 'two' }]}
          account_id="abb6995b-276e-4f56-8210-235478dee7bc" />
      </MockedProvider>
    );
  });

  it('reacts to changes in Ratings', async () => {
    expect(component.find('Widget').first().props().selectedRating).toEqual(2);
    await act(async () => {
      component.find('.widget-container').last().props().onClick();
    });
    await wait(0);
    expect(mutationCalled).toBeTruthy();
    expect(component.find('Widget').last().props().selectedRating).toEqual(2);
  });
});
