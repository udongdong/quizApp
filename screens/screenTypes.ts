import {NavigatorScreenParams} from '@react-navigation/native';

export type MainStackParamList = {
  quizScreen: undefined;
  mainTab: NavigatorScreenParams<MainTabParamList>;
};

export type MainTabParamList = {
  quiz: undefined;
  history: undefined;
  review: undefined;
};
