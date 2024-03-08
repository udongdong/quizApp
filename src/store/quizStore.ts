import {atom} from 'recoil';
import {Quiz} from '../types/quiz';
import {AtomKeys} from './atomKeys';

export const quizListAtom = atom<Quiz[]>({
  key: AtomKeys.QuizListAtom,
  default: [],
});
