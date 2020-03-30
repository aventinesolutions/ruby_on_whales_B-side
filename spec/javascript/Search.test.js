import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

const fake = require('faker');
const wait = require('waait');

import Search, { SEARCH_WHISKEYS_QUERY } from '../../app/javascript/components/Search';
import AccountContext from '../../app/javascript/context/AccountContext';
import { MockedProvider } from "@apollo/react-testing";

describe('shallow rendering Search component', () => {
  let output;

  beforeEach(() => {
    output = shallow(
      <AccountContext.Provider value={{ account_id: fake.random.uuid() }}>
        <Search />
      </AccountContext.Provider>
    );
  });

  it('renders a Search component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});

describe('reacts to changes in Search filters', () => {
  let component;
  let accountId;
  let queryCalled;
  let mocks;

  beforeEach(() => {
    queryCalled = false;
    accountId = "cdbdb637-41f7-435a-b32f-9182fbbf6329";
    mocks = [
      {
        request: {
          query: SEARCH_WHISKEYS_QUERY,
          variables: {
            accountId: accountId,
            text: "casks",
            ratingsFilter: ""
          }
        },
        result: () => {
          queryCalled = true;
          return {
            loading: false,
            data: {
              search: [
                {
                  id: "6c7e652d-5abe-487c-bcd3-f5410437fd92",
                  title: "Practical Wooden Gloves",
                  description: "Programmable system-worthy process improvement",
                  price: "€ 99.00",
                  photoUrl: "https://source.unsplash.com/640x480",
                  ratings: [
                    {
                      id: "259ac39c-a7cb-40dd-9c06-7ce431618962",
                      accountId: accountId,
                      quality: "smokiness",
                      stars: "three"
                    },
                    {
                      id: "4a9fcf69-82ca-4026-881f-24dec463f14d",
                      accountId: accountId,
                      quality: "color",
                      stars: "five"
                    }
                  ]
                }
              ]
            }
          };
        }
      }
    ];
    component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AccountContext.Provider value={{ account_id: fake.random.uuid() }}>
          <Search />
        </AccountContext.Provider>
      </MockedProvider>
    );
  });

  it('reacts to changes in filters', async () => {
    expect(component.find('#search').props().value).toEqual("");
    await act(async () => {
      component.find('#search').props().value = "casks";
      await component.find('#search').props().onChange({ target: { value: "casks" } });
    });
    await wait(0);
    expect(component.find('#search').props().value).toEqual("casks");
    expect(queryCalled).toBeTruthy();
  });
});
