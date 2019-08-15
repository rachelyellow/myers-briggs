import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard.js'

function PerspectiveTest({ questions, setUser }) {

  const [userEmail, setUserEmail] = useState('');
  const [answers, setAnswers] = useState([]);

  function getResult() {
    const MBTI = {};
    answers.forEach(function(answer) {
      if (MBTI[answer.meaning]) {
        MBTI[answer.meaning] += answer.agree_rating;
      } else {
        MBTI[answer.meaning] = answer.agree_rating;
      }
    })
    // console.log(answers);
    let resultStr = ''
    MBTI.I > MBTI.E ? resultStr += 'I' : resultStr += 'E';
    MBTI.N > MBTI.S ? resultStr += 'N' : resultStr += 'S';
    MBTI.F > MBTI.T ? resultStr += 'F' : resultStr += 'T';
    MBTI.P > MBTI.J ? resultStr += 'P' : resultStr += 'J';
    console.log(resultStr);
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
        delete answer.meaning;
      })
      console.log(response.data);
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
        <label for='emailinput'><h2>Your Email</h2></label>
        <input id='emailinput' placeholder='you@example.com' onChange={e => setUserEmail(e.target.value)}></input>
      </div>
      <button type='submit'>Save & Continue</button>
    </form>
  )
}

export default PerspectiveTest;