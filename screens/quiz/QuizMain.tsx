import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {MainStackNavigationProp} from '../screenTypes';
import {Button} from '../../components/Button';
import {RadioButton} from '../../components/RadioButton';
import {Space} from '../../components/Space';
import {Difficulty} from '../../types/quiz';

export default function QuizMain(): React.JSX.Element {
  const navigation = useNavigation<MainStackNavigationProp>();

  const selectedDifficulty = useRef<number>(0);

  const radioOptions = ['easy', 'medium', 'hard', 'random'];

  const goQuiz = () => {
    const difficulty =
      radioOptions[selectedDifficulty.current] !== 'random'
        ? (radioOptions[selectedDifficulty.current] as Difficulty)
        : undefined;

    navigation.navigate('quizScreen', {difficulty});
  };

  return (
    <View style={styles.container}>
      <Button style={styles.button} title="문제 시작" onPress={goQuiz} />

      <Space h={30} />
      <View style={styles.radioContainer}>
        <Text>{'난이도 선택'}</Text>
        <RadioButton
          radios={radioOptions}
          style={styles.radio}
          onSelected={i => (selectedDifficulty.current = i)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  radioContainer: {
    width: 300,
    alignSelf: 'center',
  },
  radio: {
    width: '100%',
    marginTop: 10,
  },
});
