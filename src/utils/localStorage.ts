export const getData = <T>(key: string): T | undefined => {
  try {
    if (typeof window === 'undefined') return;
    if (typeof Storage === 'undefined') return;
    const item = window.localStorage.getItem(key);
    if (item) return JSON.parse(item) as T;
    return;
  } catch (error) {
    return;
  }
};

export const setData = <T>(key: string, value: T) => {
  try {
    if (typeof window === 'undefined') return;
    if (typeof Storage === 'undefined') return;
    window.localStorage.setItem(key, JSON.stringify(value));
    return value;
  } catch (error) {
    return;
  }
};
