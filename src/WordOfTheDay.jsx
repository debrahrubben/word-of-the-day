// src/WordOfTheDay.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WordOfTheDay = () => {
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWordOfTheDay = async () => {
      try {
        const response = await axios.get('http://localhost:4000/word-of-the-day');
        setWordData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data : error.message); // Set the error message
        setLoading(false);
      }
    };

    fetchWordOfTheDay();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching word of the day: {error}</p>; // Display the error message

  return (
    <div>
      <h1>Word of the Day</h1>
      <h2>{wordData.word}</h2>
      <p>{wordData.definitions[0].text}</p>
      <p><strong>Note:</strong> {wordData.note}</p>
    </div>
  );
};

export default WordOfTheDay;
