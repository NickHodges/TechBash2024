import express from 'express';
import { type Request, type Response } from 'express';
import path from 'path';
import fs from 'fs';

// Define the path to the JSON file
const quotesFilePath = path.join(__dirname, '../quotes.json');

// Read the quotes from the JSON file
const quotes = JSON.parse(fs.readFileSync(quotesFilePath, 'utf-8')).quotes;

// Create an Express app
const app = express();

// Route to get a random quote
app.get('/random-quote', (res: Response) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Route to get a quote by id
app.get('/quote/:id', (req: Request, res: Response) => {
  // const id: number | undefined = parseInt(req.params.id, 10);
  const id: number | undefined = req.params.id ? parseInt(req.params.id, 10) : undefined;

  const quote: string | undefined = quotes.find((q: { id: number }) => q.id === id);

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
