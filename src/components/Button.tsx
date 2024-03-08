import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {color} from '../styles';

type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  style?: ViewStyle;
  type?: ButtonType;
  title: string;
  onPress: () => void;
};

export function Button(props: ButtonProps): React.JSX.Element {
  const {style, type = 'primary', title, onPress} = props;

  const btnStyle = type === 'primary' ? styles.primary : styles.secondary;
  const btnTextStyle =
    type === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <View style={{...styles.box, ...style}}>
      <Pressable
        style={{...styles.container, ...btnStyle, ...style}}
        onPress={onPress}>
        <Text style={{...btnTextStyle}}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: '100%',
    height: 52,
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  primary: {
    backgroundColor: color.primary,
    borderWidth: 0,
  },
  primaryText: {
    color: color.white,
  },
  secondary: {
    backgroundColor: color.gray,
    borderWidth: 1,
    borderColor: color.primary,
  },
  secondaryText: {
    color: color.primary,
  },
});
