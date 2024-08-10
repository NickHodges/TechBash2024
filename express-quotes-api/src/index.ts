import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

// Define the path to the JSON file
const quotesFilePath = path.join(__dirname, '../quotes.json');

// Read the quotes from the JSON file
const quotes = JSON.parse(fs.readFileSync(quotesFilePath, 'utf-8')).quotes;

// Create an Express app
const app = express();

// Route to get a random quote
app.get('/random-quote', (req: Request, res: Response) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Route to get a quote by id
app.get('/quote/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const quote = quotes.find((q: { id: number }) => q.id === id);

  if (quote) {
    res.json(quote);
  } else {
    res.status(404).json({ error: 'Quote not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
