import CoinCard from './CoinCard';

/**
 * CoinList Component
 * Displays a list of cryptocurrency cards
 * Shows a message if no coins match the search criteria
 */
function CoinList({ coins }) {
  if (coins.length === 0) {
    return <p className="empty-state">No cryptocurrencies found.</p>;
  }

  return (
    <div className="coin-list">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default CoinList;
