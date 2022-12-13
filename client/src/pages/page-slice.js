import { createSlice } from '@reduxjs/toolkit';

const initPageState = {
  currentPage: {
    id: null,
  },
};

export const pageSlice = createSlice({
  name: 'page',
  initialState: initPageState,
  reducers: {
    setCurrentPageId(state, action) {
      state.currentPage.id = action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;
