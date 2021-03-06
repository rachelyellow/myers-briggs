import React from 'react';

function QuestionCard({ question, modifyAnswers }) {

  const updateInput = e => {
    const newAnswer = { 
      // question_id: parseInt(e.target.name.slice(6)),
      question_id: question.id,
      agree_rating: parseInt(e.target.value),
      dimension: question.dimension,
      direction: question.direction }
    modifyAnswers(newAnswer);
  }

  return(
    <div className='card'>
      <p>{question.text}</p>
      <div className="answerbox" onChange={updateInput}>
        <span className='disagree'>Disagree</span>
        <input className="dots" type="radio" name={'answer' + question.id} value="1"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="2"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="3"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="4"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="5"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="6"/>
        <input className="dots" type="radio" name={'answer' + question.id} value="7"/>
        <span className='agree'>Agree</span>
      </div>
    </div>
  )
}

export default QuestionCard;