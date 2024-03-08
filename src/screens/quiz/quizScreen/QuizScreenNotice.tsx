import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {color} from 'styles';

export function QuizScreenNotice(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.doneText}>
        {'퀴즈가 끝났습니다. 결과 화면으로 이동해 주세요'}
      </Text>
      <Text style={styles.noticeText}>
        {'⚠️ 다시 풀기의 경우 문제 푼 내역이 저장되지 않습니다.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  doneText: {
    margin: 10,
    fontSize: 22,
    color: color.primary,
  },
  noticeText: {
    margin: 10,
    fontSize: 14,
    color: color.error,
  },
});
