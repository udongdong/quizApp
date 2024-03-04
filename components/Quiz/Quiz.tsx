import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {QuizDifficulty} from '../../types/quiz';
import check_blue from '../../assets/img/check_blue.png';

type QuizProp = {
  question: string;
  answers: string[];
  difficulty: QuizDifficulty;
  correct: string;
  isDone: boolean;
  onChange?: (a: string) => void;
};

export function Quiz(props: QuizProp): React.JSX.Element {
  const {question, answers, correct = '', isDone = false, onChange} = props;

  const [selected, setSelected] = useState<string>('');

  const getFontColor = (answer: string) => {
    if (correct === answer) {
      return styles.correct;
    }
    if (selected === answer) {
      return styles.incorrect;
    }
    return {};
  };

  return (
    <View>
      <Text style={styles.question}>Q) {question}</Text>
      {answers.map(a => {
        const answer = isDone && correct === a ? `${a} (정답)` : a;
        const fontColor = isDone && getFontColor(a);

        return (
          <Pressable
            style={styles.answer}
            onPress={() => {
              setSelected(a);
              if (onChange) {
                onChange(a);
              }
            }}>
            {selected === a ? (
              <Image style={styles.checkImage} source={check_blue} />
            ) : (
              <View style={styles.checkImage} />
            )}
            <Text style={[styles.answerText, fontColor]}>{answer}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    margin: 20,
    fontSize: 20,
  },
  answer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginLeft: 30,
  },
  answerText: {
    marginLeft: 10,
  },
  correct: {
    color: 'blue',
  },
  incorrect: {
    color: 'red',
  },
  checkImage: {
    width: 20,
    height: 20,
  },
});
