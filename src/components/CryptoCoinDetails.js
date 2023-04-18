import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../redux/crypto/cryptoSlice';

export default function CryptoCoinDetails() {
  const dispatch = useDispatch();
  const { cryptoCurrency, isLoading } = useSelector((state) => state.crypto);
  let coin = [];

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id))
  }, [dispatch]);

  coin = cryptoCurrency.filter((coin) => coin.id === id)[0];
  console.log(coin);
  if(isLoading){
    return (
      <h1>Loading...</h1>
    );
  }
  else{

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
      </>
    );
  }
}
