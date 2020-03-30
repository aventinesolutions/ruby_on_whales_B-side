import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Whiskey from '../../app/javascript/components/Whiskey';

let output;

beforeEach(() => {
  output = shallow(
    <Whiskey
      id="28846727-a4a4-4a8a-8a2c-2a5098b8a397"
      title="Licensed Wooden Keyboard"
      description="Expanded methodical definition"
      price="€170,00"
      photoUrl="http://lorempixel.com/640/480"
      ratings={[
        { quality: 'taste', stars: 'one' },
        { quality: 'color', stars: 'five' },
        { quality: 'smokiness', stars: 'three' },
      ]}
    />
  );
});

describe('Whiskey', () => {
  it('renders a Whiskey component', () => {
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
