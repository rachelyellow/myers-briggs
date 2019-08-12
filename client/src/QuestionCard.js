import React, { useState, useEffect } from 'react';

function QuestionCard({ data }) {

  const submitInput = e => {
    console.log(e);
  }

  return(
    <div className='card'>
      <p>{data.text}</p>
      <div>
        <input type="radio" name={'answer' + data.id} value="1"/>
        <input type="radio" name={'answer' + data.id} value="2"/>
        <input type="radio" name={'answer' + data.id} value="3"/>
        <input type="radio" name={'answer' + data.id} value="4"/>
        <input type="radio" name={'answer' + data.id} value="5"/>
        <input type="radio" name={'answer' + data.id} value="6"/>
        <input type="radio" name={'answer' + data.id} value="7"/>
        <input type="radio" name={'answer' + data.id} value="8"/>
        <input type="radio" name={'answer' + data.id} value="9"/>
        <input type="radio" name={'answer' + data.id} value="10"/>
      </div>
    </div>
  )
}

export default QuestionCard;