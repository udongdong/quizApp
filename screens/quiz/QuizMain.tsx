import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, View} from 'react-native';
import {MainStackParamList} from '../screenTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function QuizMain(): React.JSX.Element {
  type MainStackNavigationProp = NativeStackNavigationProp<MainStackParamList>;
  const navigation = useNavigation<MainStackNavigationProp>();

  return (
    <View>
      <Button
        title="문제 시작"
        onPress={() => navigation.navigate('quizScreen')}
      />
    </View>
  );
}
