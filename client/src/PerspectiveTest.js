import React, { useState, useEffect } from 'react';
import QuestionCard from './QuestionCard.js'

function PerspectiveTest({ questions }) {

  const [word, setWord] = useState(null);
  const [input, setInput] = useState('');

  // async function fetchData() {
  //   const response = await fetch(`https://random-word-api.herokuapp.com/word?key=${APIkey}&number=1`);
  //   const word = await response.json();
  //   setWord(word[0]);
  // }

  // const submitInput = e => {
  //   e.preventDefault();
  //   if (input.toLowerCase() === word) {
  //     setInput('');
  //     fetchData();
  //     addPoints(points + word.length);
  //     setWordCount(wordCount + 1);
  //     const newList = [...typedWords, input.toLowerCase()];
  //     setTypedWords(newList);
  //   }
  // }

  const submitInput = e => {
    console.log(e);
  }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return(
    <form onSubmit={submitInput}>
      <div>
        {questions.map((question, index) => {
          return(
            <QuestionCard data={question} key={index} />
          )
        })}
      </div>
      <div className='card'>
        <label for='emailinput'><h3>Your Email</h3></label>
        <input id='emailinput' placeholder='you@example.com'></input>
      </div>
    </form>
  )
}

export default PerspectiveTest;