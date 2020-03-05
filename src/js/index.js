import _ from 'lodash'
let qa = []
let step = 1

const ARRAY_OF_QUESTIONS = [
  {id:1, title: 'Are you a happy person?'},
  {id:2, title: 'Are you satisfied with your life?'},
  {id:3, title: 'Do you want on vacation?'},
  {id:4, title: 'Have you been to another country?'},
  {id:5, title: 'Would you like to change your life?'},
]

let stepEL = document.getElementById('step')
let button = document.getElementById('next-button')
let question = document.getElementById('question-title')
let test = document.getElementById('test')
let lastStepValue = parseInt(document.getElementById('last-step').innerHTML)

document.addEventListener("DOMContentLoaded", () => {
  //content ready
  button.addEventListener('click', handleNextAction)
});

let handleNextAction = () => {
  let findQuestion = _.find(ARRAY_OF_QUESTIONS, {id: step})
  let checked = document.querySelector('input[name="answer"]:checked').value
  step++
  if( step <= lastStepValue) {
    qa.push({question: findQuestion.title, answer: checked})
    question.innerHTML = findQuestion.title
    stepEL.innerHTML = step
    if(step === lastStepValue) {
      button.innerHTML = 'Finish'
    }
  } 
   else  {
    qa.push({question: findQuestion.title, answer: checked})
    test.innerHTML = `
    <div class='final'>
      <h1>Thanks for testing! </h1>
      <h2>The result of your replies will be sent to you by email!<h2>
    <div>`
  }
}