import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp, MainStackParamList} from '../screenTypes';
import {formatNumberToTime} from '../../utils';
import {Space, Button} from '../../components';

export function QuizResultScreen(): React.JSX.Element {
  const route = useRoute<RouteProp<MainStackParamList, 'quizResultScreen'>>();
  const {correct, total, time} = route.params;

  const navigation = useNavigation<MainStackNavigationProp>();

  const formatedTiem = formatNumberToTime(time);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        {'퀴즈가 끝났습니다. \n수고하셨습니다'}
      </Text>

      <Space h={30} />
      <Text style={styles.resultText}>
        {`정답 수 : ${correct}`.padStart(2, '0')} /{' '}
        {`총 문항수 : ${total}`.padStart(2, '0')}
      </Text>
      <Text style={styles.resultText}>{`소요 시간: ${formatedTiem}`}</Text>

      <Button
        style={styles.button}
        title="홈 으로 이동"
        onPress={() => navigation.pop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    height: 70,
  },
});
