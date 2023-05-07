import { getData, setData } from './localStorage';

export const setTheme = (theme?: string) => {
  let themeFromStorage = theme ?? getData('theme');

  if (!themeFromStorage) {
    themeFromStorage = window.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light';

    setData('theme', themeFromStorage);
  }

  document.documentElement.classList.remove('dark', 'light');
  document.documentElement.classList.add(themeFromStorage);
};
