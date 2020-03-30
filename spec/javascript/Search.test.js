import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { act } from 'react-dom/test-utils';

const fake = require('faker');
const wait = require('waait');

import Search from '../../app/javascript/components/Search';
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
  let queryCalled;
  let mocks;

  beforeEach(() => {
    queryCalled = false;
    mocks = {};
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
    });
    await wait(0);
    expect(component.find('#search').props().value).toEqual("casks");
    expect(queryCalled).toBeTruthy();
  });
});
