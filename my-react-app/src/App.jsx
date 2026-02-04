import './App.css';
import CoinList from './components/CoinList';
import { useEffect, useState } from 'react';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState('');


  useEffect(() => {
  async function fetchCoins() {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setCoins(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  fetchCoins();
}, []);
   
   if (loading) {
  return (<div>
    <p>Fetching Market data...</p>
    </div>
  );
}

if (error) {
  return <p>Error: {error}</p>;
}

const filteredCoins = coins.filter((coin) =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);


  return (
    <div className="App">
      <h1>Crypto Tracker</h1>

      <input 
      type="text"
      placeholder="Search Cryptocurrency"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      <CoinList coins={filteredCoins} />
    </div>
  );
}


export default App;
