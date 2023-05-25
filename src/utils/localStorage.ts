export const getData = <T>(key: string): T | undefined => {
  try {
    if (typeof window === 'undefined') return;
    if (typeof localStorage === 'undefined') return;
    const item = localStorage.getItem(key);
    if (item === null) return;
    try {
      return JSON.parse(item) as T;
    } catch (error) {
      return item as unknown as T;
    }
  } catch (error) {
    return;
  }
};

export const setData = <T>(key: string, value: T) => {
  try {
    if (typeof window === 'undefined') return;
    if (typeof localStorage === 'undefined') return;
    if (typeof value !== 'object' || value === null) {
      localStorage.setItem(key, value as string);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
    return value;
  } catch (error) {
    return;
  }
};
