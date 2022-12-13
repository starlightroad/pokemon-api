import { createSlice } from '@reduxjs/toolkit';

const initSidebarState = {
  isTriggered: false,

  selectedTab: {
    id: null,
  },
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: initSidebarState,
  reducers: {
    setSelectedTab(state, action) {
      state.selectedTab.id = action.payload;
    },
    setIsTriggered(state, action) {
      state.isTriggered = action.payload;
    },
  },
});

export const sidebarActions = sidebarSlice.actions;
