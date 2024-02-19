// redux/booleanSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isTrue: false,
};

// Create a slice
const signInModalSlice = createSlice({
  name: 'signInModal',
  initialState,
  reducers: {
    setTrue: (state) => {
      state.isTrue = true;
    },
    setFalse: (state) => {
      state.isTrue = false;
    },
  },
});

// Export actions
export const { setTrue, setFalse } = signInModalSlice.actions;

// Export the reducer
export default signInModalSlice.reducer;
