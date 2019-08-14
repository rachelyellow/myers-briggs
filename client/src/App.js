import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerspectiveTest from './PerspectiveTest';
import ResultsPage from './ResultsPage';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      axios.get('http://localhost:5000/questions')
      .then(response => setQuestions(response.data))
    }
    getQuestions();
  }, []);

  return (
    <div className="App">
      {completed === false ?
      <div>
        <h1>Discover Your Perspective</h1>
        <p>Complete the 7 minute test and get a detailed report of your lenses on the world.</p>
      </div>
      : null }

      {questions.length > 0 ? <PerspectiveTest questions={questions} /> : <p>Loading...</p>}

    </div>
  );
}

export default App;
