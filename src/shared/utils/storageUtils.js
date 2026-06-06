export function loadFromStorage(key, fallbackValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallbackValue;
  } catch {
    return fallbackValue;
  }
}

export function saveToStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}
