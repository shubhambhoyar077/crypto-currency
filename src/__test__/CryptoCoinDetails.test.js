import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import CryptoCoinDetails from '../components/CryptoCoinDetails';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const mockStore = configureMockStore([]);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('Details component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      crypto: {
        cryptoCurrency: [
          {
            id: '1',
            name: 'Coin 1',
            current_price: 100,
            image: '#',
            details: {test:"1000"},
          },
        ],
      },
    });

    store.dispatch = jest.fn();
    useParams.mockReturnValue({
      id: '1',
    });
  });

  
  it('should render the Details of Coins from store', () => {
    render(
      <BrowserRouter>
      <Provider store={store}>
        <CryptoCoinDetails />
      </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('$1000')).toBeInTheDocument();
  });
});