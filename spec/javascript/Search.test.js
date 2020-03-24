const { JSDOM } = require('jsdom');
const jsdom = new JSDOM(`<!doctype html><html>
   <body><div id="root" data-account-id="${fake('random.uuid')}"/></body>
</html>`);
const { window } = jsdom;
global.window = window;
global.document = window.document;

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Search from '../../app/javascript/components/Search';

describe('Search', () => {
  it('renders a Search component', () => {
    const output = shallow(
      <Search />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
