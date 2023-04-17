import { NavLink } from 'react-router-dom';

export default function CryptoCoin({ coin }) {
  return (
    <NavLink className="coin">
      <img src={coin.image} alt={coin.name} />
      <span>{coin.name}</span>
      <span>
        $
        {coin.current_price}
      </span>
    </NavLink>
  );
}
