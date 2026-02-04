function CoinList ({ coins }) {
    return(
        <div>
            {coins.map((coin) => (
                <div key={coin.id}>
                    <h3>{coin.name} ({coin.symbol.toUpperCase()})</h3>
                    <p>Price: ${coin.current_price.toFixed(2)}</p>
                    <p
                        style={{
                            color: coin.price_change_percentage_24h >= 0 ? 'green' : 'red',
                        }}
                        >
                            24h: {coin.price_change_percentage_24h.toFixed(2)}%
                        </p>
                </div>
            ))}
        </div>
    );
}


export default CoinList;