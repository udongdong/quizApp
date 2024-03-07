import React, {useEffect, useRef, useState} from 'react';
import {Quiz} from '../../components/quiz/Quiz';
import {Quiz as QuizType} from '../../types/quiz';
import {Alert, Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {ProgressBar} from '../../components/ProgressBar';
import {getNewQuiz, updateMyQuiz} from '../../modules/quiz/quizModules';
import {formatNumberToTime} from '../../util';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackNavigationProp, MainStackParamList} from '../screenTypes';
import close from '../../assets/img/close.png';
import {Button} from '../../components/Button';
import {color} from '../../styles';

export default function QuizScreen(): React.JSX.Element {
  const route = useRoute<RouteProp<MainStackParamList, 'quizScreen'>>();

  const [index, setIndex] = useState<number>(0); // 현재 풀고 있는 문항 index
  const [isSumitted, setSumit] = useState<boolean>(false); // 문제 제출 여부
  const [isDone, setDone] = useState<boolean>(false);
  const [quizList, setQuizList] = useState<QuizType[]>([]); // 문제 리스트
  const selectedList = useRef<string[]>([]); // 제출한 답안 리스트
  const [time, setTime] = useState<number>(0); // 타이머를 위한 상태값

  const navigation = useNavigation<MainStackNavigationProp>();

  const isQuizAgain = route.params.quizList !== undefined; // 다시 풀기 여부

  useEffect(() => {
    const interval = setInterval(() => setTime(t => t + 1), 1000);

    if (isDone) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isDone]);

  useEffect(() => {
    const {quizList: preQuizList, difficulty} = route.params;

    if (preQuizList) {
      setQuizList(preQuizList);
    } else {
      const fetch = async () => {
        const params = difficulty ? {difficulty} : undefined;
        const result = await getNewQuiz(params);
        setQuizList(result);
      };

      fetch();
    }
  }, [route]);

  // 다음 문제 풀기
  const goNextQuestion = async () => {
    setSumit(false);
    setIndex(prev => prev + 1);
  };

  // 문제 종료 후 결과 화면 이동
  const goQuizResultScreen = async () => {
    // 문제 리스트에 제출한 답안 머지
    const result = quizList.map((q, i) => {
      const selected = selectedList.current[i];
      return {...q, ...{selected}};
    });

    // 다시 풀기가 아니면 내가 푼 내역으로 저장
    if (!isQuizAgain) {
      await updateMyQuiz({quizList: result, time});
    }

    // 결과 화면으로 이동
    navigation.replace('quizResultScreen', {
      correct: result.filter(i => i.correct === i.selected).length,
      total: result.length,
      time: time,
    });
  };

  const sumitQuestion = () => {
    if (selectedList.current[index] !== undefined) {
      setSumit(true);
      if (quizList.length - 1 === index) {
        setDone(true);
      }
    } else {
      Alert.alert('정답을 선택해 주세요');
    }
  };

  const formatedTime = formatNumberToTime(time);
  const btnText = isSumitted ? '다음 문제 풀기' : '문제 제출';
  const btnEvent = isSumitted ? goNextQuestion : sumitQuestion;
  const btnType = isSumitted ? 'secondary' : 'primary';

  return (
    quizList && (
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.pop()}>
            <Image style={styles.close} source={close} />
          </Pressable>
        </View>

        <View style={styles.statusBar}>
          <ProgressBar total={quizList?.length || 0} current={index + 1} />
          <Text style={styles.timer}>{formatedTime}</Text>
        </View>

        <Quiz
          {...quizList[index]}
          isDone={isSumitted}
          onChange={(a: string) => {
            if (!isSumitted) {
              selectedList.current[index] = a;
            }
          }}
        />
        {isDone ? (
          <View style={styles.container}>
            <Text style={styles.doneText}>
              {'퀴즈가 끝났습니다. 결과 화면으로 이동해 주세요'}
            </Text>
            <Text style={styles.noticeText}>
              {'⚠️ 다시 풀기의 경우 문제 푼 내역이 저장되지 않습니다.'}
            </Text>
            <Button
              style={styles.button}
              title={'결과 화면으로 이동'}
              onPress={goQuizResultScreen}
              type={'secondary'}
            />
          </View>
        ) : (
          <Button
            style={styles.button}
            title={btnText}
            onPress={btnEvent}
            type={btnType}
          />
        )}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 50,
    padding: 10,
    marginRight: 5,
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timer: {
    padding: 10,
    width: '19%',
  },
  close: {
    width: 25,
    height: 25,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    height: 70,
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
