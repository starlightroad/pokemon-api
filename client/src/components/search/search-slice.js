import { createSlice } from '@reduxjs/toolkit';

import { lowerCase } from 'utilities/text-formatter';

const initSearchState = {
  enteredValue: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initSearchState,
  reducers: {
    setEnteredValue(state, action) {
      state.enteredValue = lowerCase(action.payload);
    },
  },
});

export const searchActions = searchSlice.actions;
