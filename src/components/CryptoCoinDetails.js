import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from '../redux/crypto/cryptoSlice';

export default function CryptoCoinDetails() {
  const dispatch = useDispatch();
  const { cryptoCurrency } = useSelector((state) => state.crypto);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch]);
  console.log(cryptoCurrency.filter((ele) => ele.id === id));
  return (
    <h1>dkjfnjn</h1>
  );
}
