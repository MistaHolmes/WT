const express = require('express');
const cors = require('cors');
const { GoogleGenAI } = require('@google/genai');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

app.get('/',(req,res)=>{
  res.send('Hello World!')
})

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    // console.log(message)
    // console.log(ai)
    const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: `
      You are a product recommendation assistant for Apple products only. 
      Give recommendations only for iPhone, iPad, AirPods, MacBook, and Apple Watch. 
      Keep answers short (3-4 lines), point-wise, and chatbot-style. 
      Format the response in HTML using <ul> and <li> for lists. 
      User asked: "${message}"
    `
    });

    res.json({ reply: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Sorry, I couldn't understand that." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
