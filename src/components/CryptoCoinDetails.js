import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
      <div>
        <img src={coin.image} alt={coin.name} />
        <span>{coin.name}</span>
        <span>
          $
          {coin.current_price}
        </span>
      </div>
      <table>
        <tbody>
          {Object.keys(coin.details).map((coindetail) => (
            <tr key={coindetail}>
              <td>{coindetail}</td>
              <td>{coin.details[coindetail]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
