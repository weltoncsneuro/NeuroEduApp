// src/components/Treinamento/Epilepsia.js
import React, { useState, useEffect } from 'react';

const Epilepsia = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/api/questions/epilepsia')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div>
      <h1>Epilepsia</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Epilepsia;
