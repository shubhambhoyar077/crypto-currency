import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/crypto/cryptoSlice';
import CryptoCoin from './CryptoCoin';

export default function CryptoList() {
  const { cryptoCurrency } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

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
