import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Route: Generate Marketing Copy
  app.post('/api/ai/copy', async (req, res) => {
    try {
      const { prompt } = req.body;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: {
          systemInstruction: "You are a senior marketing copywriter for McDonald's. Your tone is friendly, upbeat, and appetizing. Keep it concise.",
        }
      });
      res.json({ text: response.text });
    } catch (error: any) {
      console.error('AI Error:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // AI Route: Personalized Recommendations
  app.post('/api/ai/recommend', async (req, res) => {
    try {
      const { context } = req.body;
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Based on this user context: ${context}, suggest 3 menu items and why they would like it. Format as JSON.`,
        config: {
          responseMimeType: 'application/json',
        }
      });
      res.json(JSON.parse(response.text || '{}'));
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // Chatbot Route
  app.post('/api/ai/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are the McOrdering AI assistant. You help users find food, explain deals, and assist with orders. You are friendly and efficient. If asked about prices, say they vary by location.",
        }
      });
      
      const response = await chat.sendMessage({ message });
      res.json({ text: response.text });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
