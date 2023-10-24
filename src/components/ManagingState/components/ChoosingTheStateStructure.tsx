import { useState } from 'react';
import { useStyleTheme } from '../hook/useStyleTheme';

export function ChoosingTheStateStructure() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { styleTextSecondary } = useStyleTheme();

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();

    setIsLoading(true);
    await performProductSearch(searchQuery);
    setIsLoading(false);
  }

  async function performProductSearch(query: string) {
    const results = ['PlayStation 5', 'Iphone 13', 'Echo Dot'];
    const filterResults = results.filter((result) => result.toLowerCase().includes(query.toLowerCase()));

    setTimeout(async () => {
      setSearchResults(filterResults);
    }, 500);
  }

  return (
    <div>
      <h2 style={styleTextSecondary}>Product Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {isLoading && <p>Searching...</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}

      {!searchResults.length && !isLoading && <p>No results found.</p>}
    </div>
  );
}
