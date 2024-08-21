import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log('Email submitted:', email);
    setEmail(''); // Clear the input field after submission
  };

  return (
    <div style={styles.signupContainer}>
      <h2 style={styles.signupTitle}>Sign Up for Our Newsletter</h2>
      <form style={styles.signupForm} onSubmit={handleSubmit}>
        <input
          style={styles.signupInput}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button
          style={styles.signupButton}
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

const styles = {
  signupContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    maxWidth: '400px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  signupTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold' as const,
    marginBottom: '1rem',
    color: '#333',
  },
  signupForm: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  signupInput: {
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  signupButton: {
    padding: '0.75rem',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  signupButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default NewsletterSignup;
