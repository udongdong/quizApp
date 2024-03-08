import React, {useEffect, useRef, useState} from 'react';
import {Quiz} from 'components/quiz/Quiz';
import {Alert, StyleSheet, View} from 'react-native';
import {getNewQuiz, updateMyQuiz} from 'modules/quiz/quizModules';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {MainStackNavigationProp, MainStackParamList} from 'screens/screenTypes';
import {Quiz as QuizType} from 'types';
import {Button} from 'components';
import {color} from 'styles';
import {QuizScreenHeader} from './QuizScreenHeader';
import {QuizScreenStatusBar} from './QuizScreenStatusBar';
import {QuizScreenNotice} from './QuizScreenNotice';
import {QuizLoading} from './QuizLoading';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

export default function QuizScreen(): React.JSX.Element {
  const route = useRoute<RouteProp<MainStackParamList, 'quizScreen'>>();

  const [index, setIndex] = useState<number>(0); // 현재 풀고 있는 문항 index
  const [isSumitted, setSumit] = useState<boolean>(false); // 문제 제출 여부
  const [isDone, setDone] = useState<boolean>(false);
  const selectedList = useRef<string[]>([]); // 제출한 답안 리스트
  const [time, setTime] = useState<number>(0); // 타이머를 위한 상태값

  const navigation = useNavigation<MainStackNavigationProp>();
  const queryClient = useQueryClient();

  const isQuizAgain = route.params.quizList !== undefined; // 다시 풀기 여부

  const {data: quizList, isFetching} = useQuery<QuizType[] | Error>({
    queryKey: ['FETCH_NEW_QUIZ'],
    queryFn: () =>
      getNewQuiz({
        difficulty: route.params.difficulty,
      }),
    enabled: !isQuizAgain,
    retry: 3,
  });

  const mutate = useMutation({
    mutationKey: ['POST_MY_QUIZ'],
    mutationFn: updateMyQuiz,
    onSettled: () =>
      queryClient.invalidateQueries({queryKey: ['FETCH_REVIEW']}),
  });

  // timer 설정
  useEffect(() => {
    const interval = isFetching
      ? undefined
      : setInterval(() => setTime(t => t + 1), 1000);

    if (isDone) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isDone, isFetching]);

  // 다음 문제 풀기
  const goNextQuestion = async () => {
    setSumit(false);
    setIndex(prev => prev + 1);
  };

  // 문제 종료 후 결과 화면 이동
  const goQuizResultScreen = async () => {
    // 문제 리스트에 제출한 답안 머지
    const result = (quizList as QuizType[]).map((q, i) => {
      const selected = selectedList.current[i];
      return {...q, ...{selected}};
    });

    // 다시 풀기가 아니면 내가 푼 내역으로 저장
    if (!isQuizAgain) {
      await mutate.mutate({quizList: result, time});
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
      if ((quizList as QuizType[]).length - 1 === index) {
        setDone(true);
      }
    } else {
      Alert.alert('정답을 선택해 주세요');
    }
  };

  return isFetching ? (
    <QuizLoading />
  ) : (
    <View style={styles.container}>
      <QuizScreenHeader />

      <QuizScreenStatusBar
        total={(quizList as QuizType[]).length || 0}
        current={index + 1}
        time={time}
      />

      {quizList && (
        <Quiz
          {...(quizList as QuizType[])[index]}
          isDone={isSumitted}
          onChange={(a: string) => {
            if (!isSumitted) {
              selectedList.current[index] = a;
            }
          }}
        />
      )}

      {isDone && <QuizScreenNotice />}

      {isDone ? (
        <Button
          style={styles.button}
          title={'결과 화면으로 이동'}
          onPress={goQuizResultScreen}
          type={'secondary'}
        />
      ) : (
        <Button
          style={styles.button}
          title={isSumitted ? '다음 문제 풀기' : '문제 제출'}
          onPress={isSumitted ? goNextQuestion : sumitQuestion}
          type={isSumitted ? 'secondary' : 'primary'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
