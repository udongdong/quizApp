import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {MainScreen} from './src/screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.main}>
        <MainScreen />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
