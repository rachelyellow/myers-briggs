import React from 'react';

function QuestionCard({ question, modifyAnswers }) {

  const updateInput = e => {
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.getAttribute('category'));
    const newAnswer = { 
      question_id: parseInt(e.target.name.slice(6)),
      agree_rating: parseInt(e.target.value),
      category: e.target.getAttribute('category') }
    modifyAnswers(newAnswer);
  }

  return(
    <div className='card'>
      <p>{question.text}</p>
      <div className="answerbox" onChange={updateInput}>
      Disagree&ensp;
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="1"/>
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="2"/>
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="3"/>
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="4"/>
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="5"/>
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="6"/>
        <input className="dots" type="radio" name={'answer' + question.id} category={question.category} value="7"/>
        &emsp;Agree
      </div>
    </div>
  )
}

export default QuestionCard;