import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiSortAscending, HiSortDescending } from 'react-icons/hi';
import { fetchCoins } from '../redux/crypto/cryptoSlice';
import CryptoCoin from './CryptoCoin';
import logo from '../assets/clogo.png';

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

  const handelAscending = () => {
    setSearchList([...searchList].sort((a, b) => b.current_price - a.current_price));
  };

  const handelDescending = () => {
    setSearchList([...searchList].sort((a, b) => a.current_price - b.current_price));
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
            className="searchbar"
            type="text"
            value={searchText}
            onChange={handelSearch}
            placeholder="Search Coin"
          />
          <div className="intro">
            <img className="logo" src={logo} alt="logo" />
            <h1>Crypto</h1>
          </div>
        </div>
        <div className="sorting-bar">
          <span>Crypto Coins</span>
          <div className="sort">
            <HiSortAscending onClick={handelAscending} />
            <HiSortDescending onClick={handelDescending} />
          </div>
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
