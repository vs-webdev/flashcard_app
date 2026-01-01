type MasteryLevel = 0 | 1 | 2 | 3 | 4 | 5

interface Card {
  id: number;
  question: string;
  answer: string;
  category: string;
  masteryLevel: MasteryLevel; // This forces the numbers to be treated as MasteryLevel
}

const data: Card[] = [
  {
    id: 1,
    question: 'What does HTML stand for?',
    answer: 'HyperText Markup Language',
    category: 'Web Development',
    masteryLevel: 0,
  },
  {
    id: 2,
    question: 'What is the difference between "let" and "const" in JavaScript?',
    answer: '"let" allows you to reassign the variable, while "const" create a constant reference that cannot be reassigned. Both are block-scoped.',
    category: 'JavaScript',
    masteryLevel: 2,
  },
  {
    id: 3,
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheets',
    category: 'Web Development',
    masteryLevel: 0,
  },
  {
    id: 4,
    question: 'What is the capital of France?',
    answer: 'Paris',
    category: 'Geography',
    masteryLevel: 5,
  },
  {
    id: 5,
    question: 'What is a closure in JavaScript?',
    answer: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned.',
    category: 'JavaScript',
    masteryLevel: 1,
  },
  {
    id: 6,
    question: 'What does DOM stand for?',
    answer: 'Document Object Model',
    category: 'Web Development',
    masteryLevel: 3,
  },
  {
    id: 7,
    question: 'What is the Pythagorean theorem?',
    answer: 'In a right triangle, a + b = c, where c is the hypotenuse',
    category: 'Mathematics',
    masteryLevel: 5,
  },
  {
    id: 8,
    question: 'What is the difference between "==" and "===" in JavaScript?',
    answer: '"==" checks for value equality with type coercion, while "===" checks for both value and type equality (strict equality).',
    category: 'JavaScript',
    masteryLevel: 4,
  },
  {
    id: 9,
    question: 'What is Flexbox used for in CSS?',
    answer: 'Flexbox is a CSS layout model that helps distribue space an dalign items in a container, making it easier to create responsive layouts.',
    category: 'CSS',
    masteryLevel: 0,
  },
  {
    id: 10,
    question: 'What wrote "Romeo and Juliet"?',
    answer: 'William Shakespeare',
    category: 'Literature',
    masteryLevel: 5,
  },
  {
    id: 11,
    question: 'What is the purpose of the "async" keyword in JavaScript?',
    answer: 'The "async" keyword declares an asynchronous function that returns a Promise and allows the use of "await" inside it.',
    category: 'JavaScript',
    masteryLevel: 2,
  },
]

export default data;