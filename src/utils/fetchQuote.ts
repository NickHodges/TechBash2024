export interface Quote {
  quote: string;
  author: string;
}

export async function fetchRandomQuote(): Promise<Quote> {
  try {
    const response = await fetch('http://localhost:3000/random-quote');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Ensure the response contains the expected data
    if (!data.quote || !data.author) {
      throw new Error('Invalid data format received from the server.');
    }

    return {
      quote: data.quote,
      author: data.author,
    };

  } catch (error) {
    // Log the error for debugging purposes
    console.error('Failed to fetch the random quote:', error);

    // Re-throw the error or handle it as needed
    throw new Error('Could not fetch the random quote. Please try again later.');
  }
}

export async function fetchQuote(id: string | undefined): Promise<Quote> {
  const response = await fetch(`http://localhost:3000/quote/${id}`);
  if (!response.ok) {
    throw new Error('Quote not found');
  }
  const data = await response.json();
  return {
    quote: data.quote,
    author: data.author,
  };
}