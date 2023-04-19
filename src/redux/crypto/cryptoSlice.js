import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fectCrtyptoCoins from '../../api_services/fetchCryptoCoins';
import fetchCoinDetails from '../../api_services/fetchCoinDetails';

const initialState = {
  cryptoCurrency: [],
  isLoading: true,
};

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', fectCrtyptoCoins);
export const fetchDetails = createAsyncThunk('crypto/fetchDetails', fetchCoinDetails);

export const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCoins.fulfilled, (state, action) => {
        const coinList = action.payload;
        return ({
          ...state,
          cryptoCurrency: coinList,
          isLoading: false,
        });
      })
      .addCase(fetchCoins.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }))
      .addCase(fetchDetails.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchDetails.fulfilled, (state, action) => {
        const coinDetails = action.payload[0];
        const updateCoin = (state.cryptoCurrency.map((coin) => {
          if (coin.id !== coinDetails.id) return coin;
          return coinDetails;
        }));
        return ({
          ...state,
          cryptoCurrency: updateCoin,
          isLoading: false,
        });
      })
      .addCase(fetchDetails.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default cryptoSlice.reducer;
