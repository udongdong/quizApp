import React, {useMemo, useRef, useState} from 'react';
import {Quiz} from '../../components/Quiz/Quiz';
import {QuizDifficulty} from '../../types/quiz';
import {suffle} from '../../util/quizUtil';
import {Alert, Button, StyleSheet, View} from 'react-native';
import {getQuizzes} from '../../models/quiz/quizModel';
import {QuizStatusBar} from './QuizStatusBar';
import {Timer} from '../../components/Timer';

export default function QuizScreen(): React.JSX.Element {
  const quizes = getQuizzes();
  const quizesSize = quizes.length;

  const [index, setIndex] = useState<number>(0);
  const [isSumitted, setSumit] = useState<boolean>(false);
  const selected = useRef<string[]>([]);

  const {question, correct_answer, incorrect_answers, difficulty} =
    quizes[index];

  const answers: string[] = useMemo(() => {
    return suffle([...[correct_answer], ...incorrect_answers]);
  }, [correct_answer, incorrect_answers]);

  const goNextQuestion = () => {
    setSumit(false);
    // selected.current = '';
    if (quizesSize - 1 > index) {
      setIndex(prev => prev + 1);
    } else {
      // 결과 화면으로 이동
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <QuizStatusBar total={quizesSize} current={index + 1} />
        <Timer />
      </View>
      <Quiz
        question={question}
        answers={answers}
        difficulty={difficulty as QuizDifficulty}
        correct={correct_answer}
        isDone={isSumitted}
        onChange={(a: string) => {
          if (!isSumitted) {
            selected.current[index] = a;
          }
        }}
      />
      {isSumitted ? (
        <Button title={'다음 문제 풀기'} onPress={goNextQuestion} />
      ) : (
        <Button
          title={'문제 제출'}
          onPress={() => {
            if (selected.current[index] !== undefined) {
              setSumit(true);
            } else {
              Alert.alert('정답을 선택해 주세요');
            }
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
