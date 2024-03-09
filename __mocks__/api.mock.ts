jest.mock('../src/api', () => ({
  fetchNewQuiz: async () => {
    return {
      response_code: 0,
      results: [
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'Entertainment: Video Games',
          question:
            'Who is the last boss in Night In The Woods&#039; Demontower minigame?',
          correct_answer: 'The Blood Thief',
          incorrect_answers: ['Mega Hairball ', 'King Skellie ', 'Krampus '],
        },
        {
          type: 'multiple',
          difficulty: 'medium',
          category: 'Science: Computers',
          question: 'What is known as &quot;the brain&quot; of the Computer?',
          correct_answer: 'Central Processing Unit',
          incorrect_answers: [
            'Motherboard',
            'Graphics Processing Unit',
            'Keyboard',
          ],
        },
        {
          type: 'boolean',
          difficulty: 'hard',
          category: 'Entertainment: Video Games',
          question:
            'The video game &quot;Fuel&quot; has an open world that is 5,560 square miles?',
          correct_answer: 'True',
          incorrect_answers: ['False'],
        },
        {
          type: 'multiple',
          difficulty: 'medium',
          category: 'Entertainment: Video Games',
          question:
            'What is the full name of the protagonist from the SNES game Clock Tower?',
          correct_answer: 'Jennifer Simpson',
          incorrect_answers: [
            'Jennifer Barrows',
            'Jennifer Cartwright',
            'Jennifer Maxwell',
          ],
        },
        {
          type: 'boolean',
          difficulty: 'easy',
          category: 'Sports',
          question: 'There are a total of 20 races in Formula One 2016 season.',
          correct_answer: 'False',
          incorrect_answers: ['True'],
        },
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'Entertainment: Video Games',
          question: 'What does Solid Snake use to hide himself with?',
          correct_answer: 'Cardboard Box',
          incorrect_answers: [
            'Cloaking Device',
            'Metal Crate',
            'Cardboard cut-out',
          ],
        },
        {
          type: 'multiple',
          difficulty: 'medium',
          category: 'Entertainment: Video Games',
          question: 'Which of these game franchises were made by Namco?',
          correct_answer: 'Tekken',
          incorrect_answers: [
            'Street Fighter',
            'Mortal Kombat',
            'Dragon Quest',
          ],
        },
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'Entertainment: Cartoon &amp; Animations',
          question:
            'Which Teenage Mutant Ninja Turtle traditionally wears an orange bandana?',
          correct_answer: 'Michelangelo',
          incorrect_answers: ['Leonardo', 'Donatello', 'Raphael'],
        },
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'Sports',
          question: 'Who won the 2015 Formula 1 World Championship?',
          correct_answer: 'Lewis Hamilton',
          incorrect_answers: [
            'Nico Rosberg',
            'Sebastian Vettel',
            'Jenson Button',
          ],
        },
        {
          type: 'multiple',
          difficulty: 'easy',
          category: 'Entertainment: Video Games',
          question: 'Who created the &quot;Metal Gear&quot; Series?',
          correct_answer: 'Hideo Kojima',
          incorrect_answers: [
            'Hiroshi Yamauchi',
            'Shigeru Miyamoto',
            'Gunpei Yokoi',
          ],
        },
      ],
    };
  },
}));

export const fetchNewQuizResult = [
  {
    question:
      "Who is the last boss in Night In The Woods' Demontower minigame?",
    correct: 'The Blood Thief',
    difficulty: 'easy',
    answers: ['The Blood Thief', 'Mega Hairball ', 'King Skellie ', 'Krampus '],
  },
  {
    question: 'What is known as "the brain" of the Computer?',
    correct: 'Central Processing Unit',
    difficulty: 'medium',
    answers: [
      'Central Processing Unit',
      'Motherboard',
      'Graphics Processing Unit',
      'Keyboard',
    ],
  },
  {
    question:
      'The video game "Fuel" has an open world that is 5,560 square miles?',
    correct: 'True',
    difficulty: 'hard',
    answers: ['True', 'False'],
  },
  {
    question:
      'What is the full name of the protagonist from the SNES game Clock Tower?',
    correct: 'Jennifer Simpson',
    difficulty: 'medium',
    answers: [
      'Jennifer Simpson',
      'Jennifer Barrows',
      'Jennifer Cartwright',
      'Jennifer Maxwell',
    ],
  },
  {
    question: 'There are a total of 20 races in Formula One 2016 season.',
    correct: 'False',
    difficulty: 'easy',
    answers: ['False', 'True'],
  },
  {
    question: 'What does Solid Snake use to hide himself with?',
    correct: 'Cardboard Box',
    difficulty: 'easy',
    answers: [
      'Cardboard Box',
      'Cloaking Device',
      'Metal Crate',
      'Cardboard cut-out',
    ],
  },
  {
    question: 'Which of these game franchises were made by Namco?',
    correct: 'Tekken',
    difficulty: 'medium',
    answers: ['Tekken', 'Street Fighter', 'Mortal Kombat', 'Dragon Quest'],
  },
  {
    question:
      'Which Teenage Mutant Ninja Turtle traditionally wears an orange bandana?',
    correct: 'Michelangelo',
    difficulty: 'easy',
    answers: ['Michelangelo', 'Leonardo', 'Donatello', 'Raphael'],
  },
  {
    question: 'Who won the 2015 Formula 1 World Championship?',
    correct: 'Lewis Hamilton',
    difficulty: 'easy',
    answers: [
      'Lewis Hamilton',
      'Nico Rosberg',
      'Sebastian Vettel',
      'Jenson Button',
    ],
  },
  {
    question: 'Who created the "Metal Gear" Series?',
    correct: 'Hideo Kojima',
    difficulty: 'easy',
    answers: [
      'Hideo Kojima',
      'Hiroshi Yamauchi',
      'Shigeru Miyamoto',
      'Gunpei Yokoi',
    ],
  },
];
