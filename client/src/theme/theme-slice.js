import { createSlice } from '@reduxjs/toolkit';

const initThemeState = {
  currentTheme: null,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initThemeState,
  reducers: {
    setTheme(state, action) {
      state.currentTheme = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;
