// ========================================
// EXERCISE 1: Button Click & Simple Output
// ========================================
console.log('Exercise 1 loaded!');

// Step 1: Find the button in HTML by its ID
const btnShowMessage = document.getElementById('btn-show-message');

// Step 2: Find the output box where we'll show results
const output1 = document.getElementById('output-1');

// Step 3: Make the button listen for clicks
btnShowMessage.addEventListener('click', function() {
  // This code runs when the button is clicked
  const message = 'You clicked the button! Great job! 🎉';
  output1.innerHTML = '<p class="success">' + message + '</p>';
  console.log('Button clicked!');
});

// Step 4: Reset button to clear the message
const btnResetMessage = document.getElementById('btn-reset-message');
btnResetMessage.addEventListener('click', function() {
  output1.innerHTML = '<p>Your message will appear here...</p>';
  console.log('Message cleared!');
});

// ========================================
// EXERCISE 2: Variables & User Input
// ========================================
console.log('Exercise 2 loaded!');

// Get the input box, button, and output
const inputName = document.getElementById('user-name');
const btnGreet = document.getElementById('btn-greet');
const output2 = document.getElementById('output-2');

// When button is clicked, greet the user
btnGreet.addEventListener('click', function() {
  // .value gets what the user typed
  const name = inputName.value;
  console.log('User typed:', name);

  // Check if they typed anything
  if (name === '') {
    // If empty, show error
    output2.innerHTML = '<p class="error">Please enter your name!</p>';
  } else {
    // If they typed something, greet them
    const greeting = 'Hello, ' + name + '! Nice to meet you! 👋';
    output2.innerHTML = '<p class="success">' + greeting + '</p>';
  }
});

// Reset button
const btnResetGreet = document.getElementById('btn-reset-greet');
btnResetGreet.addEventListener('click', function() {
  inputName.value = '';  // Clear the input box
  output2.innerHTML = '<p>Greeting will appear here...</p>';
});

// ========================================
// EXERCISE 3: Numbers & Arithmetic
// ========================================
console.log('Exercise 3 loaded!');

const num1Input = document.getElementById('num-1');
const num2Input = document.getElementById('num-2');
const btnAdd = document.getElementById('btn-add');
const btnSubtract = document.getElementById('btn-subtract');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const output3 = document.getElementById('output-3');

// Create a reusable function for calculations
function performCalculation(operation) {
  // Convert text to numbers using Number()
  const num1 = Number(num1Input.value);
  const num2 = Number(num2Input.value);

  let result;

  // Decide which operation to do
  if (operation === 'add') {
    result = num1 + num2;
  } 
  else if (operation === 'subtract') {
    result = num1 - num2;
  } 
  else if (operation === 'multiply') {
    result = num1 * num2;
  } 
  else if (operation === 'divide') {
    // Check for division by zero
    if (num2 === 0) {
      output3.innerHTML = '<p class="error">Cannot divide by zero!</p>';
      return;  // Stop here
    }
    result = num1 / num2;
  }

  // Show result (rounded to 2 decimals)
  const resultText = num1 + ' ' + operation + ' ' + num2 + ' = ' + result.toFixed(2);
  output3.innerHTML = '<p class="success">' + resultText + '</p>';
}

// Connect each button to the function
btnAdd.addEventListener('click', function() {
  performCalculation('add');
});

btnSubtract.addEventListener('click', function() {
  performCalculation('subtract');
});

btnMultiply.addEventListener('click', function() {
  performCalculation('multiply');
});

btnDivide.addEventListener('click', function() {
  performCalculation('divide');
});

// Reset button
const btnResetMath = document.getElementById('btn-reset-math');
btnResetMath.addEventListener('click', function() {
  num1Input.value = 0;
  num2Input.value = 0;
  output3.innerHTML = '<p>Calculation results will appear here...</p>';
});


// ========================================
// EXERCISE 4: Conditionals (If/Else)
// ========================================
console.log('Exercise 4 loaded!');

const ageInput = document.getElementById('age-input');
const btnCheckAge = document.getElementById('btn-check-age');
const output4 = document.getElementById('output-4');

function checkAgeEligibility() {
  const age = Number(ageInput.value);

  // Check if valid number
  if (age === 0 || isNaN(age)) {
    output4.innerHTML = '<p class="error">Please enter a valid age!</p>';
    return;
  }

  let message = '';
  let className = '';

  // Check different age ranges
  if (age < 13) {
    message = '🎮 You are ' + age + ' years old. Too young for most activities.';
    className = 'warning';
  } 
  else if (age >= 13 && age < 16) {
    message = '🎬 You are ' + age + ' years old. You can watch PG movies!';
    className = 'info';
  } 
  else if (age >= 16 && age < 18) {
    message = '🎞️ You are ' + age + ' years old. You can watch M movies!';
    className = 'success';
  } 
  else if (age >= 18) {
    message = '🎥 You are ' + age + ' years old. You are an adult!';
    className = 'success';
  }

  output4.innerHTML = '<p class="' + className + '">' + message + '</p>';
}

// Button click
btnCheckAge.addEventListener('click', checkAgeEligibility);

// Also work when user presses Enter
ageInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    checkAgeEligibility();
  }
});

// Reset button
const btnResetAge = document.getElementById('btn-reset-age');
btnResetAge.addEventListener('click', function() {
  ageInput.value = 0;
  output4.innerHTML = '<p>Eligibility result will appear here...</p>';
});

// ========================================
// EXERCISE 5: Loops & Lists
// ========================================
console.log('Exercise 5 loaded!');

const loopCountInput = document.getElementById('loop-count');
const btnGenerateList = document.getElementById('btn-generate-list');
const output5 = document.getElementById('output-5');

function generateList() {
  const count = Number(loopCountInput.value);

  // Validate input
  if (count === 0 || isNaN(count) || count < 1 || count > 10) {
    output5.innerHTML = '<p class="error">Enter a number between 1 and 10!</p>';
    return;
  }

  let listHTML = '<ul>';  // Start a list

  // FOR LOOP: repeat from 1 to count
  // for (start; condition; increment)
  for (let i = 1; i <= count; i++) {
    // i++ means: add 1 to i after each repeat
    listHTML += '<li>Item number ' + i + '</li>';
  }

  listHTML += '</ul>';  // End the list

  output5.innerHTML = '<p class="info">Generated ' + count + ' items:</p>' + listHTML;
}

btnGenerateList.addEventListener('click', generateList);

// Reset button
const btnResetList = document.getElementById('btn-reset-list');
btnResetList.addEventListener('click', function() {
  loopCountInput.value = 5;
  output5.innerHTML = '<p>List will appear here...</p>';
});

// ========================================
// EXERCISE 6: Functions (Reusable Code)
// ========================================
console.log('Exercise 6 loaded!');

const wordInput = document.getElementById('word-input');
const btnAnalyzeWord = document.getElementById('btn-analyze-word');
const output6 = document.getElementById('output-6');

// Helper function 1: Count letters
function countLetters(word) {
  return word.length;
}

// Helper function 2: Check if palindrome
function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split('').reverse().join('');
  return lowerWord === reversedWord;
}

// Helper function 3: Count vowels
function countVowels(word) {
  let vowelCount = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (letter === 'a' || letter === 'e' || letter === 'i' || 
        letter === 'o' || letter === 'u') {
      vowelCount++;
    }
  }
  return vowelCount;
}

// Helper function 4: Count consonants
function countConsonants(word) {
  let consonantCount = 0;
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    if (/[a-z]/.test(letter) && 
        letter !== 'a' && letter !== 'e' && letter !== 'i' && 
        letter !== 'o' && letter !== 'u') {
      consonantCount++;
    }
  }
  return consonantCount;
}

// Main function
function analyzeWord() {
  const word = wordInput.value.trim();

  if (word === '') {
    output6.innerHTML = '<p class="error">Please enter a word!</p>';
    return;
  }

  // Call helper functions
  const letters = countLetters(word);
  const vowels = countVowels(word);
  const consonants = countConsonants(word);
  const palindrome = isPalindrome(word);

  // Build results
  let resultHTML = '<p class="info"><strong>Analysis of "' + word + '":</strong></p>';
  resultHTML += '<ul>';
  resultHTML += '<li>Total letters: ' + letters + '</li>';
  resultHTML += '<li>Vowels: ' + vowels + '</li>';
  resultHTML += '<li>Consonants: ' + consonants + '</li>';

  if (palindrome) {
    resultHTML += '<li>🎉 This is a PALINDROME!</li>';
  } else {
    resultHTML += '<li>Not a palindrome</li>';
  }

  resultHTML += '</ul>';
  output6.innerHTML = resultHTML;
}

btnAnalyzeWord.addEventListener('click', analyzeWord);

wordInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    analyzeWord();
  }
});

const btnResetWord = document.getElementById('btn-reset-word');
btnResetWord.addEventListener('click', function() {
  wordInput.value = '';
  output6.innerHTML = '<p>Word analysis will appear here...</p>';
});

// ========================================
// EXERCISE 7: Arrays & Iteration
// ========================================
console.log('Exercise 7 loaded!');

const gradeInput = document.getElementById('student-grade');
const btnAddGrade = document.getElementById('btn-add-grade');
const btnShowStats = document.getElementById('btn-show-stats');
const output7 = document.getElementById('output-7');
const btnResetGrades = document.getElementById('btn-reset-grades');

// Create empty array
let grades = [];

function addGrade() {
  const grade = gradeInput.value.toUpperCase();

  if (grade === '') {
    output7.innerHTML = '<p class="error">Please enter a grade!</p>';
    return;
  }

  const validGrades = ['A', 'B', 'C', 'D', 'F'];
  if (validGrades.indexOf(grade) === -1) {
    output7.innerHTML = '<p class="error">Enter A, B, C, D, or F only!</p>';
    return;
  }

  grades.push(grade);
  gradeInput.value = '';

  output7.innerHTML = '<p class="success">Grade ' + grade + ' added! Total: ' + 
                      grades.length + '</p>';
}

function showStatistics() {
  if (grades.length === 0) {
    output7.innerHTML = '<p class="error">No grades added yet!</p>';
    return;
  }

  let countA = 0, countB = 0, countC = 0, countD = 0, countF = 0;

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] === 'A') countA++;
    else if (grades[i] === 'B') countB++;
    else if (grades[i] === 'C') countC++;
    else if (grades[i] === 'D') countD++;
    else if (grades[i] === 'F') countF++;
  }

  const total = grades.length;
  const percentA = ((countA / total) * 100).toFixed(1);
  const percentB = ((countB / total) * 100).toFixed(1);
  const percentC = ((countC / total) * 100).toFixed(1);
  const percentD = ((countD / total) * 100).toFixed(1);
  const percentF = ((countF / total) * 100).toFixed(1);

  const counts = [countA, countB, countC, countD, countF];
  const maxCount = Math.max(...counts);

  let mostCommon = '';
  if (maxCount === countA) mostCommon = 'A';
  else if (maxCount === countB) mostCommon = 'B';
  else if (maxCount === countC) mostCommon = 'C';
  else if (maxCount === countD) mostCommon = 'D';
  else if (maxCount === countF) mostCommon = 'F';

  let statsHTML = '<p class="info"><strong>Statistics (Total: ' + total + '):</strong></p>';
  statsHTML += '<ul>';
  statsHTML += '<li>A: ' + countA + ' (' + percentA + '%)</li>';
  statsHTML += '<li>B: ' + countB + ' (' + percentB + '%)</li>';
  statsHTML += '<li>C: ' + countC + ' (' + percentC + '%)</li>';
  statsHTML += '<li>D: ' + countD + ' (' + percentD + '%)</li>';
  statsHTML += '<li>F: ' + countF + ' (' + percentF + '%)</li>';
  statsHTML += '</ul>';
  statsHTML += '<p>Most common: ' + mostCommon + '</p>';

  output7.innerHTML = statsHTML;
}

btnAddGrade.addEventListener('click', addGrade);
btnShowStats.addEventListener('click', showStatistics);

gradeInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addGrade();
  }
});

btnResetGrades.addEventListener('click', function() {
  grades = [];
  gradeInput.value = '';
  output7.innerHTML = '<p>Grade statistics will appear here...</p>';
});

// ========================================
// EXERCISE 8: DOM Manipulation & Styling
// ========================================
console.log('Exercise 8 loaded!');

const bgColorSelect = document.getElementById('bg-color');
const btnChangeStyle = document.getElementById('btn-change-style');
const output8 = document.getElementById('output-8');
const btnResetStyle = document.getElementById('btn-reset-style');

function changeStyle() {
  const colorVariable = bgColorSelect.value;

  const root = document.documentElement;
  const colorValue = getComputedStyle(root).getPropertyValue(colorVariable).trim();

  output8.style.backgroundColor = colorValue;

  if (colorVariable === '--color-dark') {
    output8.style.color = 'red';
  } else {
    output8.style.color = '#2c3e50';
  }

  output8.style.border = '3px solid black';
  output8.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';

  output8.classList.remove('fade-in');
  output8.classList.add('fade-in');

  output8.innerHTML = '<p><strong>Style Updated! ✨</strong></p>' +
                      '<p>Color: ' + colorVariable + '</p>';
}

btnChangeStyle.addEventListener('click', changeStyle);
bgColorSelect.addEventListener('change', changeStyle);

btnResetStyle.addEventListener('click', function() {
  output8.style.backgroundColor = '';
  output8.style.color = '';
  output8.style.border = '';
  output8.style.boxShadow = '';
  output8.classList.remove('fade-in');
  output8.innerHTML = '<p>This box will change!</p>';
  bgColorSelect.value = '--color-light';
});

// ========================================
// EXERCISE 9: Keyboard Events
// ========================================
console.log('Exercise 9 loaded!');

const textCounter = document.getElementById('text-counter');
const charCountSpan = document.getElementById('char-count');
const wordCountSpan = document.getElementById('word-count');

textCounter.addEventListener('input', function() {
  const text = textCounter.value;

  const charCount = text.length;
  charCountSpan.textContent = charCount;

  let wordCount = 0;
  if (text.trim() !== '') {
    wordCount = text.trim().split(' ').length;
  }
  wordCountSpan.textContent = wordCount;
});

textCounter.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    textCounter.value = '';
    charCountSpan.textContent = '0';
    wordCountSpan.textContent = '0';
  }
});

// ========================================
// EXERCISE 10: Interactive Quiz
// ========================================
console.log('Exercise 10 loaded!');

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "Which is a JavaScript data type?",
    options: ["Integer", "Boolean", "Character", "Alphabet"],
    correct: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Complex Style Sheets"
    ],
    correct: 1
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function myFunc() {}",
      "def myFunc() {}",
      "func myFunc() {}",
      "create function myFunc()"
    ],
    correct: 0
  },
  {
    question: "What is an array?",
    options: [
      "A type of variable",
      "A list that stores multiple values",
      "A mathematical formula",
      "A CSS property"
    ],
    correct: 1
  }
];

const btnSubmitAnswer = document.getElementById('btn-submit-answer');
const btnNextQuestion = document.getElementById('btn-next-question');
const btnResetQuiz = document.getElementById('btn-reset-quiz');
const output10 = document.getElementById('output-10');

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function displayQuestion() {
  const question = quizData[currentQuestion];
  selectedAnswer = null;

  const questionElement = document.getElementById('quiz-question');
  questionElement.textContent = 'Question ' + (currentQuestion + 1) + ' of ' + 
                                 quizData.length + ': ' + question.question;

  const optionsElement = document.getElementById('quiz-options');
  optionsElement.innerHTML = '';

  for (let i = 0; i < question.options.length; i++) {
    const label = document.createElement('label');
    const radio = document.createElement('input');

    radio.type = 'radio';
    radio.name = 'answer';
    radio.value = i;

    radio.addEventListener('change', function() {
      selectedAnswer = parseInt(this.value);
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(' ' + question.options[i]));
    label.style.display = 'block';
    label.style.margin = '10px 0';
    label.style.cursor = 'pointer';

    optionsElement.appendChild(label);
  }

  btnSubmitAnswer.style.display = 'inline-block';
  btnNextQuestion.style.display = 'none';
}

function checkAnswer() {
  if (selectedAnswer === null) {
    output10.innerHTML = '<p class="error">Please select an answer!</p>';
    return;
  }

  const question = quizData[currentQuestion];
  const isCorrect = (selectedAnswer === question.correct);

  if (isCorrect) {
    score++;
    output10.innerHTML = '<p class="success">✅ Correct!</p>';
  } else {
    output10.innerHTML = '<p class="error">❌ Wrong!</p>' +
                        '<p>Correct: ' + question.options[question.correct] + '</p>';
  }

  btnSubmitAnswer.style.display = 'none';
  btnNextQuestion.style.display = 'inline-block';
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
    output10.innerHTML = '<p>Select an answer!</p>';
  } else {
    displayQuizEnd();
  }
}

function displayQuizEnd() {
  const percentage = ((score / quizData.length) * 100).toFixed(0);

  let message = '';
  if (percentage >= 80) {
    message = '🏆 Excellent! ' + percentage + '%!';
  } else if (percentage >= 60) {
    message = '👍 Good job! ' + percentage + '%!';
  } else {
    message = '📚 Keep studying! ' + percentage + '%!';
  }

  const questionElement = document.getElementById('quiz-question');
  questionElement.textContent = 'Quiz Complete!';

  const optionsElement = document.getElementById('quiz-options');
  optionsElement.innerHTML = '';

  btnSubmitAnswer.style.display = 'none';
  btnNextQuestion.style.display = 'none';
  btnResetQuiz.style.display = 'inline-block';

  output10.innerHTML = '<p class="success">' + message + '</p>' +
                       '<p>Score: ' + score + '/' + quizData.length + '</p>';
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;

  btnSubmitAnswer.style.display = 'inline-block';
  btnNextQuestion.style.display = 'none';
  btnResetQuiz.style.display = 'none';

  displayQuestion();
  output10.innerHTML = '<p>Select an answer!</p>';
}

btnSubmitAnswer.addEventListener('click', checkAnswer);
btnNextQuestion.addEventListener('click', nextQuestion);
btnResetQuiz.addEventListener('click', resetQuiz);

displayQuestion();

console.log('✅ All 10 exercises loaded successfully!');