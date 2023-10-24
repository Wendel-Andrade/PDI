import { useState } from 'react';

export function Signup() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Sent: ${inputValue}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '10px 0' }}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
}
