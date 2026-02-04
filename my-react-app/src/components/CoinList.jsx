function CoinList({ coins }) {
  if (coins.length === 0) {
    return <p className="empty">No coins found.</p>;
  }

  return (
    <div className="coin-list">
      {coins.map((coin) => (
        <div className="coin-card" key={coin.id}>
          <div className="coin-info">
            <h3>{coin.name}</h3>
            <span>{coin.symbol.toUpperCase()}</span>
          </div>

          <div className="coin-price">
            <p>${coin.current_price.toLocaleString()}</p>
            <p
              className={
                coin.price_change_percentage_24h >= 0
                  ? "positive"
                  : "negative"
              }
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoinList;
