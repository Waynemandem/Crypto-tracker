import './App.css';
import CoinList from './compnents/CoinList';
import { useEffect, useState } from 'react';

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
  return <p>Loading crypto data...</p>;
}

if (error) {
  return <p>Error: {error}</p>;
}


   return (
  <div>
    <h1>Crypto Tracker</h1>
    <CoinList coins={coins} />
  </div>
);
}

export default App;
