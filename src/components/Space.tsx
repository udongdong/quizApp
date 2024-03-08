import React from 'react';
import {View} from 'react-native';

type SpaceProps = {
  h?: number;
  w?: number;
};

export function Space(props: SpaceProps): React.JSX.Element {
  const {h = 0, w = 0} = props;

  return <View style={{marginTop: h, marginLeft: w}} />;
}
