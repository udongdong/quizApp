import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'styles';

export function QuizLoading(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>
        {'문제를 불러오고 있습니다. \n잠시만 기다려주세요'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    textAlign: 'center',
    margin: 10,
    fontSize: 22,
    color: color.primary,
  },
});
