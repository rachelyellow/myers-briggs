import React, { useState, useEffect } from 'react';

function QuestionCard({ data }) {

  const submitInput = e => {
    console.log(e);
  }

  return(
    <div className='card'>
      <p>{data.text}</p>
      <div className="answerbox">
      Disagree&ensp;
        <input className="dots" type="radio" name={'answer' + data.id} value="1"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="2"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="3"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="4"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="5"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="6"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="7"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="8"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="9"/>
        <input className="dots" type="radio" name={'answer' + data.id} value="10"/>
        &emsp;Agree
      </div>
    </div>
  )
}

export default QuestionCard;