import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { fake } from 'faker';

import Whiskey from '../../app/javascript/components/Whiskey';

describe('Whiskey', () => {
  it('renders a Whiskey component', () => {
    const output = shallow(
      <Whiskey
        id={fake("random:uuid")}
        title={fake("commerce:productName")}
        description={fake("company:catchPhrase")}
        price={fake("commerce:price")}
        photoUrl={fake("image:imageUrl")}
        ratings={[
          { quality: 'taste', stars: 'one' },
          { quality: 'color', stars: 'five' },
          { quality: 'smokiness', stars: 'three' },
        ]}
      />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
