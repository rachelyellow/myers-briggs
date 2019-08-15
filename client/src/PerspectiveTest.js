import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard.js'

function PerspectiveTest({ questions, setUser }) {

  const [userEmail, setUserEmail] = useState('');
  const [answers, setAnswers] = useState([]);

  function getResult() {
    const MBTI = { EI: 0, SN: 0, TF: 0, JP: 0 };
    answers.forEach(function(answer) {
      // puts the rating on a scale from -3 to 3
      const dimensionScale = (answer.agree_rating - 4) * answer.direction;
      MBTI[answer.dimension] += dimensionScale;
    })
    let resultStr = ''
    MBTI.EI > 0 ? resultStr += 'I' : resultStr += 'E';
    MBTI.SN > 0 ? resultStr += 'N' : resultStr += 'S';
    MBTI.TF > 0 ? resultStr += 'F' : resultStr += 'T';
    MBTI.JP > 0 ? resultStr += 'P' : resultStr += 'J';
    return resultStr;
  }

  function sendToDB(MBTIresult) {
    // create new user with email address
    axios.post('http://localhost:5000/users', {
      email: userEmail,
      perspective_result: MBTIresult
    }).then(function(response) {
      const userId = response.data[0].id;
      answers.forEach(function(answer) {
        answer.user_id = userId;
        delete answer.dimension;
        delete answer.direction;
      })
      setUser(response.data[0])
      axios.post('http://localhost:5000/answers', answers)
        .then(response => console.log('added answers!'))
  
    }).catch(function(error) {
      console.log(error);
    })
  }


  const submitInput = e => {
    e.preventDefault();
    if (answers.length < 10) {
      alert('Please answer all questions.')
    } else if (!userEmail.match('^.+@[^\.].*\.[a-z]{2,}$')) {
      alert('Please enter a valid email address.')
    } else {
      const result = getResult();
      sendToDB(result);
    }
  }

  function modifyAnswers(newAnswer) {
    const questionID = newAnswer.question_id;
    const filteredAnswers = answers.filter(answer => answer.question_id !== questionID);
    const newAnswerList = [...filteredAnswers, newAnswer];
    setAnswers(newAnswerList);
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
        <label for='emailinput'><h2>Your Email</h2></label>
        <input id='emailinput' placeholder='you@example.com' onChange={e => setUserEmail(e.target.value)}></input>
      </div>
      <button type='submit'>Save & Continue</button>
    </form>
  )
}

export default PerspectiveTest;