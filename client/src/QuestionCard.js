import React from 'react';

function QuestionCard({ question, modifyAnswers }) {

  const updateInput = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.getAttribute('meaning'));
    const newAnswer = { 
      question_id: parseInt(e.target.name.slice(6)),
      agree_rating: parseInt(e.target.value),
      meaning: e.target.getAttribute('meaning') }
    modifyAnswers(newAnswer);
  }

  return(
    <div className='card'>
      <p>{question.text}</p>
      <div className="answerbox" onChange={updateInput}>
        <span className='disagree'>Disagree</span>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="1"/>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="2"/>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="3"/>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="4"/>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="5"/>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="6"/>
        <input className="dots" type="radio" name={'answer' + question.id} meaning={question.meaning} value="7"/>
        <span className='agree'>Agree</span>
      </div>
    </div>
  )
}

export default QuestionCard;