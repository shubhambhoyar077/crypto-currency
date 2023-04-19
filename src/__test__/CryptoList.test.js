import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import CryptoList from '../components/CryptoList';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([]);

describe('Crypto component', () => {
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
          },
          {
            id: '2',
            name: 'Coin 2',
            current_price: 100,
            image: '#',
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  it('should render the Coins from store', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>

          <CryptoList />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Coin 1')).toBeInTheDocument();
    expect(screen.getByText('Coin 2')).toBeInTheDocument();
  });

  it('coin count should be 2', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>

          <CryptoList />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getAllByText('$100')).toHaveLength(2);
  });
});
