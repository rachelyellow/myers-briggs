import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PerspectiveTest from './PerspectiveTest';
import ResultsPage from './ResultsPage';
import './App.css';

function App() {
  const fakeUser = { id: 1, email: 'lala@lalala.com', perspective_result: 'INFJ' }
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState(null);


  useEffect(() => {
    async function getQuestions() {
      axios.get('http://localhost:5000/questions')
      .then(response => setQuestions(response.data))
    }
    getQuestions();
  }, []);

  return (
    <div className="App">
      { user === null ?
      <div>
        <h1>Discover Your Perspective</h1>
        <p id='description'>Complete the 7 minute test and get a detailed report of your lenses on the world.</p>
      </div>
      : null }

      {questions.length > 0 && !user && <PerspectiveTest questions={questions} setUser={setUser} />}
      {questions.length < 0 && !user && <p>Loading...</p>}
      
      { user ? <ResultsPage user={user} /> : null }

    </div>
  );
}

export default App;
