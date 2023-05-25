import { getData, setData } from './localStorage';

type TTheme = 'dark' | 'light';

export const getTheme = () => getData<string>('theme');

export const setTheme = (value: TTheme) => setData('theme', value);

export const toggleTheme = (): string => {
  const theme = getTheme() === 'dark' ? 'light' : 'dark';
  setTheme(theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
  return theme;
};
