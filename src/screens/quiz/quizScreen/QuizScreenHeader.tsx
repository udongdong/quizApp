import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import close from '../../../assets/img/close.png';
import {useNavigation} from '@react-navigation/native';
import {MainStackNavigationProp} from '../../../screens';

export function QuizScreenHeader(): React.JSX.Element {
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.pop()}>
        <Image style={styles.close} source={close} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 50,
    padding: 10,
    marginRight: 5,
  },
  close: {
    width: 25,
    height: 25,
  },
});
