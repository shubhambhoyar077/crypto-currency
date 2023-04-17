import './App.css';
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
      <Route path='/coin/:id' element={<CryptoCoinDetails />} />
    </Route>,
  ),
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
