import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressBar} from 'components';
import {formatNumberToTime} from 'utils';

type QuizScreenStatusBarProps = {
  total: number;
  current: number;
  time: number;
};

export function QuizScreenStatusBar(
  props: QuizScreenStatusBarProps,
): React.JSX.Element {
  const {total, current, time} = props;

  const formatedTime = formatNumberToTime(time);

  return (
    <View style={styles.statusBar}>
      <ProgressBar total={total} current={current} />
      <Text style={styles.timer}>{formatedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    padding: 10,
    width: '19%',
  },
});
