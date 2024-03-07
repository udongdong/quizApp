export type Difficulty = 'medium' | 'easy' | 'hard';

export type Quiz = {
  difficulty: Difficulty;
  question: string;
  correct: string;
  answers: string[];
  selected?: string;
};

export type Review = {
  date: Date;
  quizList: Quiz[];
  time: number;
};
