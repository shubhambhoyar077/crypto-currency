import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/crypto/cryptoSlice';
import CryptoCoin from './CryptoCoin';

export default function CryptoList() {
  const { cryptoCurrency, isLoading, error } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState(cryptoCurrency);

  useEffect(() => {
    if (!cryptoCurrency.length) {
      dispatch(fetchCoins());
    }
  }, [dispatch]);

  useEffect(() => {
    setSearchList(cryptoCurrency);
  }, [cryptoCurrency]);

  const handelSearch = (e) => {
    setSearchText(e.target.value);
    setSearchList(cryptoCurrency.filter((coin) => coin.name.includes(e.target.value)));
  };

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }
  if (cryptoCurrency.length) {
    return (
      <div>
        <div className="logo-part">
          <input
            type="text"
            value={searchText}
            onChange={handelSearch}
            placeholder="Search"
          />
          <h1>Crypto</h1>
        </div>
        <div className="gridContainer">
          {searchList.map((coin) => <CryptoCoin key={coin.id} coin={coin} />)}
        </div>
      </div>
    );
  }

  return (
    <span>{error}</span>
  );
}
