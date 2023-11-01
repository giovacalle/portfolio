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

export const setInitialTheme = () => {
  const theme = getTheme();
  if (theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    return;
  }
  if (matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
    document.documentElement.classList.add('dark');
  }
};
