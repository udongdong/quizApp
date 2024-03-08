import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Difficulty} from '../../types/quiz';
import check_blue from '../../assets/img/check_blue.png';
import check_blank from '../../assets/img/check_blank.png';
import {Badge} from './Badge';
import {color} from '../../styles';

type QuizProps = {
  question: string;
  answers: string[];
  difficulty: Difficulty;
  correct: string;
  selected?: string;
  isDone: boolean;
  onChange?: (a: string) => void;
};

export function Quiz(props: QuizProps): React.JSX.Element {
  const {
    question,
    answers,
    correct = '',
    difficulty,
    isDone = false,
    onChange,
    selected: prevSelected,
  } = props;

  const [selected, setSelected] = useState<string>('');

  const getFontColor = (isCorrect: boolean, isSelected: boolean) => {
    if (isCorrect) {
      return styles.correct;
    }
    if (isSelected) {
      return styles.incorrect;
    }
    return {};
  };

  return (
    answers && (
      <View style={styles.container}>
        <Badge style={styles.badge} type={difficulty} />
        <Text style={styles.question}>{`Q) ${question}`}</Text>
        {answers?.map((a, i) => {
          const answer = isDone && correct === a ? `${a} (정답)` : a;
          const isSelected = prevSelected ? prevSelected === a : selected === a;
          const fontColor = isDone && getFontColor(correct === a, isSelected);
          const img = isSelected ? check_blue : check_blank;

          return (
            <Pressable
              key={i}
              style={styles.answer}
              onPress={() => {
                if (isDone) {
                  return;
                }

                setSelected(a);
                if (onChange) {
                  onChange(a);
                }
              }}>
              <Image style={styles.checkImage} source={img} />
              <Text style={[styles.answerText, fontColor]}>{answer}</Text>
            </Pressable>
          );
        })}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  badge: {
    margin: 10,
  },
  question: {
    fontSize: 20,
  },
  answer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  answerText: {
    marginLeft: 10,
  },
  correct: {
    color: color.primary,
  },
  incorrect: {
    color: color.error,
  },
  checkImage: {
    width: 20,
    height: 20,
  },
});
