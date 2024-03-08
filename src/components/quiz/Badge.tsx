import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Difficulty} from '../../types';
import {color} from '../../styles';

type BadgeProps = {
  style?: ViewStyle;
  type: Difficulty;
};

const BADGE_SIZE = 50;

export function Badge(props: BadgeProps): React.JSX.Element {
  const {style, type} = props;

  const text = type.toString();
  const badgeStyle = styles[type];

  return (
    <View style={{...styles.container, ...badgeStyle, ...style}}>
      <Text style={styles.font}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  easy: {
    backgroundColor: color.easy,
    borderWidth: 3,
    borderColor: 'green',
  },
  medium: {
    backgroundColor: color.medium,
    borderWidth: 3,
    borderColor: 'orange',
  },
  hard: {
    backgroundColor: color.hard,
    borderWidth: 3,
    borderColor: 'red',
  },
  font: {
    fontSize: 10,
    fontWeight: 'bold',
    color: color.white,
  },
});
