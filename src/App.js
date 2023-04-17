import './App.css';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import IndexLayout from './components/IndexLayout';
import CryptoList from './components/CrtyptoList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<IndexLayout />}>
      <Route index element={<CryptoList />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
