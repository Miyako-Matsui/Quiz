const quiz = [
  {
    question:
      'Which Japanese tea ceremony emphasizes the art of preparing and presenting matcha (green tea)?',

    answers: ['Sushi', 'Sake', 'Ikebana', 'Chanoyu'],
    correct: 'Ikebana',
  },
  {
    question:
      'Which Japanese martial art emphasizes throws, joint locks, and pins as opposed to strikes?',

    answers: ['Judo', 'Kendo', 'Aikido', 'Karate'],
    correct: 'Judo',
  },
  {
    question:
      'Which ancient Japanese form of poetry consists of three lines with a syllable pattern of 5-7-5?',

    answers: ['Waka', 'Haiku', 'Senryu', 'Karuta'],
    correct: 'Haiku',
  },
]

const quizLength = quiz.length
let quizIndex = 0

let score = 0

const button = document.getElementsByTagName('button')
const buttonLength = button.length

//クイズの問題文、選択肢を定義

const updateQuestion = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question
  for (let i = 0; i < buttonLength; i++) {
    button[i].textContent = quiz[quizIndex].answers[i]
  }
}

const setupQuiz = () => {
  updateQuestion()
  for (let i = 0; i < buttonLength; i++)
    button[i].addEventListener('click', (e) => {
      clickHandler(e)
    })
}

//ボタンクリックで正か誤か
const clickHandler = (e) => {
  if (quiz[quizIndex].correct == e.target.textContent) {
    window.alert('Correct!')
    score++
  } else window.alert('Incorrect!')

  quizIndex++
  if (quizIndex < quizLength) {
    updateQuestion()
  } else {
    window.alert('End! You got ' + score + '/' + quizLength)
  }
}

setupQuiz()
