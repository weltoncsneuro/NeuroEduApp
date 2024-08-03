// src/components/Treinamento/Neurovascular.js
import React, { useState, useEffect } from 'react';

const Neurovascular = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('/api/questions/neurovascular')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div>
      <h1>Neurovascular</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Neurovascular;
