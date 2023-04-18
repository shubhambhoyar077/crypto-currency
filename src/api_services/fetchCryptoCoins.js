const fectCrtyptoCoins = async () => {
  try {
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
      details: {
        market_cap: coin.market_cap,
        market_cap_rank: coin.market_cap_rank,
        fully_diluted_valuation: coin.fully_diluted_valuation,
        total_volume: coin.total_volume,
        high_24h: coin.high_24h,
        low_24h: coin.low_24h,
        price_change_24h: coin.price_change_24h,
        price_change_percentage_24h: coin.price_change_percentage_24h,
        market_cap_change_24h: coin.market_cap_change_24h,
        market_cap_change_percentage_24h: coin.market_cap_change_percentage_24h,
        circulating_supply: coin.circulating_supply,
        total_supply: coin.total_supply,
        max_supply: coin.max_supply,
        ath: coin.ath,
        ath_change_percentage: coin.ath_change_percentage,
        ath_date: coin.ath_date,
        atl: coin.atl,
        atl_change_percentage: coin.atl_change_percentage,
        atl_date: coin.atl_date,
        last_updated: coin.last_updated,
      },
    })));
    return cryptoCoins;
  } catch (err) {
    return err;
  }
};

export default fectCrtyptoCoins;
