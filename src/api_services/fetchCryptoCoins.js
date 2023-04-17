const fectCrtyptoCoins = async () => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?${new URLSearchParams({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 20,
    page: 1,
    sparkline: false,
    locale: 'en',
  })}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const cryptoCoins = (data.map((coin) => ({
    id: coin.id,
    name: coin.name,
    image: coin.image,
    current_price: coin.current_price,
  })));
  return cryptoCoins;
};

export default fectCrtyptoCoins;
