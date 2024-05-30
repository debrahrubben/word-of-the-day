// proxy-server/index.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(cors());

app.get('/word-of-the-day', async (req, res) => {
  try {
    const response = await axios.get('http://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching word of the day:', error); // Log the error details
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
