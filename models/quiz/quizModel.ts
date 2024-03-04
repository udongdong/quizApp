let quizzes = [
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Geography',
    question: 'What is the capital of Australia?',
    correct_answer: 'Canberra',
    incorrect_answers: ['Sydney', 'Melbourne', 'Brisbane'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Japanese Anime &amp; Manga',
    question:
      'Which Japanese music group was formed to produce theme music for the anime &quot;Guilty Crown&quot;?',
    correct_answer: 'Egoist',
    incorrect_answers: ['Goose house', 'Babymetal', 'Garnidelia'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Film',
    question:
      'In the film &quot;Requiem for a Dream&quot;, what drug does Jared Leto&#039;s character get addicted to?',
    correct_answer: 'Heroin',
    incorrect_answers: ['Cocaine', 'Marijuana', 'Oxycodone'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question:
      'In Super Mario Bros., who informs Mario that the princess is in another castle?',
    correct_answer: 'Toad',
    incorrect_answers: ['Luigi', 'Yoshi', 'Bowser'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Japanese Anime &amp; Manga',
    question:
      'In the &quot;Toaru Majutsu no Index&quot; anime, Touma Kamijou is a level 0 esper that has the ability to do what?',
    correct_answer: 'Dispell any esper or magical powers',
    incorrect_answers: [
      'Teleport',
      'Make telepathic communications',
      'Create electricity from his own body',
    ],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Mythology',
    question: 'Who was the King of Gods in Ancient Greek mythology?',
    correct_answer: 'Zeus',
    incorrect_answers: ['Apollo', 'Hermes', 'Poseidon'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Cartoon &amp; Animations',
    question:
      'Which of these characters from &quot;SpongeBob SquarePants&quot; is not a squid?',
    correct_answer: 'Gary',
    incorrect_answers: ['Orvillie', 'Squidward', 'Squidette'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'History',
    question: 'When did the French Revolution begin?',
    correct_answer: '1789',
    incorrect_answers: ['1823', '1756', '1799'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Geography',
    question: 'What is Canada&#039;s largest island?',
    correct_answer: 'Baffin Island',
    incorrect_answers: [
      'Prince Edward Island',
      'Vancouver Island',
      'Newfoundland',
    ],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Video Games',
    question: 'What was the first .hack game?',
    correct_answer: '.hack//Infection',
    incorrect_answers: ['.hack//Zero', '.hack//Sign', '.hack//Liminality'],
  },
];

export const getQuizzes = () => {
  return quizzes;
};
