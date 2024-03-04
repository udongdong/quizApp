import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from './screens/MainScreen';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.main}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
