import { NavLink } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';

export default function NavBar() {
  return (
    <>
      <NavLink to="/">
        <AiOutlineLeft />
      </NavLink>
      <span>Crypto</span>
      <div>
        <BsMic className="mic" />
        <IoIosSettings />
      </div>
    </>
  );
}
