import './App.css';
import CoinList from './components/CoinList';
import SearchBar from './components/SearchBar';
import SkeletonLoader from './components/SkeletonLoader';
import LoadingState from './components/LoadingState';
import Footer from './components/Footer';
import { useEffect, useState, useCallback } from 'react';

// CoinGecko API endpoint for top 10 cryptocurrencies by market cap
const COINS_API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h';

/**
 * App Component
 * Main application component that manages:
 * - Fetching cryptocurrency data from CoinGecko API
 * - Handling loading and error states
 * - Filtering coins by search query
 * - Rendering the dashboard with search, coin list, and footer
 */
function App() {
  // State management
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  /**
   * Fetches cryptocurrency data from CoinGecko API
   * Memoized with useCallback to prevent unnecessary re-fetches
   */
  const fetchCoins = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(COINS_API_URL);

      if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency data');
      }

      const data = await response.json();
      setCoins(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Effect: Fetch coins on component mount
   * Clean up is handled by dependency array (empty = runs once)
   */
  useEffect(() => {
    fetchCoins();
  }, [fetchCoins]);

  // Render loading skeleton while fetching
  if (loading) {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Crypto Tracker</h1>
        </header>
        <main className="app-main">
          <SkeletonLoader />
        </main>
        <Footer />
      </div>
    );
  }

  // Render error state if fetch fails
  if (error) {
    return (
      <div className="app-container">
        <header className="app-header">
          <h1>Crypto Tracker</h1>
        </header>
        <main className="app-main">
          <LoadingState error={`Error: ${error}`} onRetry={fetchCoins} />
        </main>
        <Footer />
      </div>
    );
  }

  // Filter coins based on search query
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Crypto Tracker</h1>
      </header>

      <main className="app-main">
        <SearchBar search={search} onSearchChange={setSearch} />
        <CoinList coins={filteredCoins} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
