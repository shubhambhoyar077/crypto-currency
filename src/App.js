import './App.css';
import './css/navbar.css';
import './css/cryptolist.css';
import './css/cryptodetails.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import IndexLayout from './components/IndexLayout';
import CryptoList from './components/CryptoList';
import CryptoCoinDetails from './components/CryptoCoinDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />}>
      <Route index element={<CryptoList />} />
      <Route path="/coin/:id" element={<CryptoCoinDetails />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <div className="AppContainer">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
