import { useEffect, useState } from 'react';

const initialState = {
  theme: null,
};

const useLocalStorage = () => {
  const [preferences, setPreferences] = useState(initialState);
  const PREFERENCES_KEY = 'preferences';

  const setLocalStorage = (targetKey, data) => {
    const newData = { ...preferences };
    newData[targetKey] = data;

    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(newData));
    setPreferences(newData);
  };

  const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem(PREFERENCES_KEY));
    setPreferences(data || { theme: null });
  };

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  return [preferences, setLocalStorage];
};

export default useLocalStorage;
