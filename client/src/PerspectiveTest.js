import React, { useState } from 'react';
import QuestionCard from './QuestionCard.js'

function PerspectiveTest({ questions }) {

  const [userEmail, setUserEmail] = useState('');
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState('');


  const submitInput = e => {
    e.preventDefault();
    if (answers.length < 10) {
      alert('Please answer all questions.')
    } else if (!userEmail.match('^.+@[^\.].*\.[a-z]{2,}$')) {
      alert('Please enter a valid email address.')
    } else {
      answers.sort(function(a, b) {
        return a.question_id -b.question_id;
      })
    }
    console.log(answers, userEmail);
  }

  function modifyAnswers(newAnswer) {
    const questionID = newAnswer.question_id;
    const filteredAnswers = answers.filter(answer => answer.question_id !== questionID);
    const newAnswerList = [...filteredAnswers, newAnswer];
    setAnswers(newAnswerList);
    console.log(newAnswerList);
  }

  return(
    <form onSubmit={submitInput}>
      <div>
        {questions.map((question, index) => {
          return(
            <QuestionCard question={question} key={index} modifyAnswers={modifyAnswers}/>
          )
        })}
      </div>
      <div className='card'>
        <label for='emailinput'><h3>Your Email</h3></label>
        <input id='emailinput' placeholder='you@example.com' onChange={e => setUserEmail(e.target.value)}></input>
      </div>
    </form>
  )
}

export default PerspectiveTest;