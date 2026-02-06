/**
 * CoinCard Component
 * Displays individual cryptocurrency card with price and 24h change
 * Shows positive/negative indicators for price movements
 */
function CoinCard({ coin }) {
  const isPositive = coin.price_change_percentage_24h >= 0;
  const priceChangeClass = isPositive ? "positive" : "negative";
  const priceChangeSymbol = isPositive ? "+" : "";

  return (
    <div className="coin-card">
      <div className="coin-info">
        <h3 className="coin-name">{coin.name}</h3>
        <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>
      </div>

      <div className="coin-price">
        <p className="price">${coin.current_price.toLocaleString()}</p>
        <p className={`price-change ${priceChangeClass}`}>
          {priceChangeSymbol}{coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export default CoinCard;
