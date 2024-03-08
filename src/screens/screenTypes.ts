import {NavigatorScreenParams} from '@react-navigation/native';
import {Quiz, Difficulty} from '../types/quiz';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type MainStackNavigationProp =
  NativeStackNavigationProp<MainStackParamList>;

export type MainStackParamList = {
  mainTab: NavigatorScreenParams<MainTabParamList>;
  quizScreen: {quizList?: Quiz[]; difficulty?: Difficulty};
  quizResultScreen: {correct: number; total: number; time: number};
  reviewDetail: {quizList: Quiz[]};
};

export type MainTabParamList = {
  quiz: undefined;
  review: undefined;
};
