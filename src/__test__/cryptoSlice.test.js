import reducer from '../redux/crypto/cryptoSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(
    { cryptoCurrency: [], isLoading: true },
  );
});
