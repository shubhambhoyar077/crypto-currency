import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import '../css/navbar.css';

export default function IndexLayout() {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
