import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BsArrowRightCircle } from 'react-icons/bs';

export default function CryptoCoin({ coin }) {
  return (
    <NavLink to={`/coin/${coin.id}`} className="coin">
      <BsArrowRightCircle className="details-arrow" />
      <img src={coin.image} alt={coin.name} />

      <h3>{coin.name}</h3>
      <span>
        $
        {coin.current_price}
      </span>
    </NavLink>
  );
}

CryptoCoin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    current_price: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};
