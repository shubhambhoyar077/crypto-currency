import { AiOutlineLeft } from 'react-icons/ai';
import { BsMic } from 'react-icons/bs';
import { IoIosSettings } from 'react-icons/io';

export default function NavBar() {
  return (<>
  <AiOutlineLeft />
  <span>Crypto</span>
  <div>
  <BsMic />
  <IoIosSettings />
  </div>
  </>);
}