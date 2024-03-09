/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

import {render} from '@testing-library/react-native';

function getComponent(props: {}) {
  return <App {...props} />;
}

describe('App test', () => {
  const props = {};
  const component = getComponent(props);
  test('render app', () => {
    const rendered = render(component);
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});
