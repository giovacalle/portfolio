import { getData, setData } from './localStorage';

export const changeTheme = (theme?: string) => {
  let themeFromStorage = theme ?? getData('theme');

  if (!themeFromStorage) {
    themeFromStorage = window.matchMedia('(prefers-color-scheme: dark)')?.matches
      ? 'dark'
      : 'light';

    setData('theme', themeFromStorage);
  }

  if (themeFromStorage === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const getTheme = () => getData<string>('theme');

export const setTheme = (theme: string) => setData('theme', theme);

export const toggleTheme = () => {
  const theme = getData('theme') === 'dark' ? 'light' : 'dark';
  setData('theme', theme);
  changeTheme(theme);
};
