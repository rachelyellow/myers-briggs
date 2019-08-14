import React from 'react';

function ResultsPage({ user }) {

  return (
    <div id="resultspage">

      <div className='left'>
        <h1>Your Perspective</h1>
        <h3>Your perspective is {user.perspective_result}</h3>
      </div>

      <div className='right'>

        <div className='perspective'>
          <span className='inline'>Introversion (I)</span>
          <div className={user.perspective_result[0] === 'I' ? 'coloured bar inline' : 'bar inline'}></div>
          <div className={user.perspective_result[0] === 'E' ? 'coloured bar inline' : 'bar inline'}></div>
          <span className='inline'>Extraversion (E)</span>
        </div>

        <div className='perspective'>
          <span className='inline'>Sensing (S)</span>
          <div className={user.perspective_result[1] === 'S' ? 'coloured bar inline' : 'bar inline'}></div>
          <div className={user.perspective_result[1] === 'N' ? 'coloured bar inline' : 'bar inline'}></div>
          <span className='inline'>Intuition (N)</span>
        </div>

        <div className='perspective'>
          <span className='inline'>Thinking (T)</span>
          <div className={user.perspective_result[2] === 'T' ? 'coloured bar inline' : 'bar inline'}></div>
          <div className={user.perspective_result[2] === 'F' ? 'coloured bar inline' : 'bar inline'}></div>
          <span className='inline'>Feeling (F)</span>
        </div>
        
        <div className='perspective'>
          <span className='inline'>Judging (J)</span>
          <div className={user.perspective_result[3] === 'J' ? 'coloured bar inline' : 'bar inline'}></div>
          <div className={user.perspective_result[3] === 'P' ? 'coloured bar inline' : 'bar inline'}></div>
          <span className='inline'>Perceiving (P)</span>
        </div>

      </div>


    </div>
  );
}

export default ResultsPage;
