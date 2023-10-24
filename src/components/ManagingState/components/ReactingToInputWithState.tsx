import { useState } from 'react';

import '../../../App.css';

export function ReactingToInputWithState() {
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputValue.toLowerCase() === 'success') {
      setSuccessMessage("Correct message! You're right.");
      setErrorMessage(null);
    } else {
      setSuccessMessage(null);
      setErrorMessage('Incorrect message. Try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a message: <br />
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </label>
        <br />
        <div>
          <button type="submit">Verify</button>
        </div>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}
