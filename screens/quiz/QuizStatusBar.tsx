import React from 'react';
import {View, StyleSheet} from 'react-native';

type ProgressBarProps = {
  total: number;
  current: number;
};

export function QuizStatusBar(props: ProgressBarProps): React.JSX.Element {
  const {total, current} = props;
  const progressPercentage = (current / total) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View
          style={{width: `${progressPercentage}%`, ...styles.progressFill}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    flex: 1,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4caf50', // Adjust the color of the filled progress bar as needed
    borderRadius: 5,
  },
});
