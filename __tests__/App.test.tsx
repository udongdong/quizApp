/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

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
