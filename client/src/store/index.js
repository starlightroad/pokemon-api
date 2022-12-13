import { configureStore } from '@reduxjs/toolkit';

import { searchSlice } from 'components/search';
import { sidebarSlice } from 'layouts/sidebar';
import { themeSlice } from 'theme/theme-slice';
import { pageSlice } from 'pages/page-slice';

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    search: searchSlice.reducer,
    theme: themeSlice.reducer,
    page: pageSlice.reducer,
  },
});

export default store;
