import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';

export function Timer(): React.JSX.Element {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setTime(t => t + 1), 1000);
    return () => clearTimeout(timer);
  });

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <Text style={styles.container}>
      {`${minutes}`.padStart(2, '0')}:{`${seconds}`.padStart(2, '0')}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    width: '19%',
  },
});
