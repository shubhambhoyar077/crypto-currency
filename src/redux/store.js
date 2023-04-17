import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
