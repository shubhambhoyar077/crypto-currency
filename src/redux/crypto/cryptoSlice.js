import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fectCrtyptoCoins from '../../api_services/fetchCryptoCoins';

const initialState = {
  cryptoCurrency: [],
  isLoading: true,
};

export const fetchCoins = createAsyncThunk('crypto/fetchCoins', fectCrtyptoCoins);

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
      .addCase(fetchCoins.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default cryptoSlice.reducer;
