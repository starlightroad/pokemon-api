import { themeActions } from 'theme/theme-slice';

const setTheme = (dispatcher, theme) => {
  const html = document.documentElement;
  const newTheme = (!theme && 'light') || theme;

  html.dataset.theme = newTheme;
  html.style.colorScheme = newTheme;

  dispatcher(themeActions.setTheme(newTheme));
};

export default setTheme;
