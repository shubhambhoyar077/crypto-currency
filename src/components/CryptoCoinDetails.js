import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchDetails } from '../redux/crypto/cryptoSlice';

export default function CryptoCoinDetails() {
  const dispatch = useDispatch();
  const { cryptoCurrency, isLoading } = useSelector((state) => state.crypto);
  const { id } = useParams();
  const coin = cryptoCurrency.find((coin) => coin.id === id);
  useEffect(() => {
    if (!coin.details) {
      dispatch(fetchDetails(id));
    }
  }, [dispatch]);

  if (isLoading) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <>
      <div className="coin-intro">
        <img src={coin.image} alt={coin.name} />
        <h3>{coin.name}</h3>
        <span>
          $
          {coin.current_price}
        </span>
      </div>
      <div className="sorting-bar">
        <span>
          {coin.name}
          {' '}
          Details
        </span>
      </div>
      <ul>
        {Object.keys(coin.details).map((coindetail) => (
          <li key={coindetail} className="row-data">
            <span>{coindetail}</span>
            <div>
              <span className="current-price">
                $
                {coin.details[coindetail]}
              </span>
              <BsArrowRightCircle />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
