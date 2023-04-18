import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/crypto/cryptoSlice';
import CryptoCoin from './CryptoCoin';

export default function CryptoList() {
  const { cryptoCurrency, isLoading, error } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!cryptoCurrency.length) {
      dispatch(fetchCoins());
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  if (cryptoCurrency.length) {
    return (
      <div>
        <div className="logo-part">
          <h1>Crypto</h1>
        </div>
        <div className="gridContainer">
          {cryptoCurrency.map((coin) => <CryptoCoin key={coin.id} coin={coin} />)}
        </div>
      </div>
    );
  }

  return (
    <span>{error}</span>
  );
}
