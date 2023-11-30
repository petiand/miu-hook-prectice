import { useRef } from "react";

// Custom hook for managing localStorage operations
export const useLocalStorage = () => {
  // useRef is used to maintain a reference to the singleton instance
  const localStorageRef = useRef(null);

  if (!localStorageRef.current) {
    const storage = window.localStorage;
    //declaring the local storage methods
    localStorageRef.current = {
      getItem: (key) => JSON.parse(storage.getItem(key)),
      setItem: (key, value) => storage.setItem(key, JSON.stringify(value)),
      removeItem: (key) => storage.removeItem(key),
    };
  }

  return localStorageRef.current;
};

//rework more resarch
