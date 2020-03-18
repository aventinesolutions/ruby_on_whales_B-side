import React from 'react';
import Rating from '../../app/javascript/components/Rating';
import { create, update } from 'react-test-renderer';
import './setupTests';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

describe('Rating', () => {
  it('renders a Rating component', () => {
    const output = shallow(
      <Rating ratings={[]} />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
