// src/components/WordOfTheDay.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define types for the word data
interface Definition {
  text: string;
}

interface WordData {
  word: string;
  definitions: Definition[];
  note: string;
}

const WordOfTheDay: React.FC = () => {
  const [wordData, setWordData] = useState<WordData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWordOfTheDay = async () => {
      try {
        const response = await axios.get('http://localhost:4000/word-of-the-day');
        setWordData(response.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.response ? error.response.data : error.message);
        setLoading(false);
      }
    };

    fetchWordOfTheDay();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching word of the day: {error}</p>;

  return (
    <div>
      <h1>Word of the Day</h1>
      <h2>{wordData?.word}</h2>
      <p>{wordData?.definitions[0]?.text}</p>
      <p><strong>Note:</strong> {wordData?.note}</p>
    </div>
  );
};

export default WordOfTheDay;
