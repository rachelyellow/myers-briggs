import React from 'react';

function QuestionCard({ question, modifyAnswers }) {

  const updateInput = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    const newAnswer = { question_id: parseInt(e.target.name.slice(6)), agree_rating: parseInt(e.target.value) }
    modifyAnswers(newAnswer);
  }

  return(
    <div className='card'>
      <p>{question.text}</p>
      <div className="answerbox" onChange={updateInput}>
      Disagree&ensp;
        <input className="dots" type="radio" name={'answer' + question.id} value="1"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="2"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="3"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="4"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="5"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="6"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="7"/>
        &emsp;Agree
      </div>
    </div>
  )
}

export default QuestionCard;