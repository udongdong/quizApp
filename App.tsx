import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MainScreen from './screens/MainScreen';
import {RecoilRoot} from 'recoil';

export default function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.main}>
        <MainScreen />
      </SafeAreaView>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
