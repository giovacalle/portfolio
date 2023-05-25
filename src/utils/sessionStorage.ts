export const getData = <T>(key: string): T | undefined => {
  try {
    if (typeof window === 'undefined') return;
    if (typeof sessionStorage === 'undefined') return;
    const item = sessionStorage.getItem(key);
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
    if (typeof sessionStorage === 'undefined') return;
    if (typeof value !== 'object' || value === null) {
      sessionStorage.setItem(key, value as string);
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
    return value;
  } catch (error) {
    return;
  }
};
