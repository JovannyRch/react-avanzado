import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      let val = window.localStorage.getItem(key);
      if (val !== null) return JSON.parse(val);
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorage = (val) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(val));
      setValue(val);
    } catch (error) {}
  };

  return [value, setLocalStorage];
};
