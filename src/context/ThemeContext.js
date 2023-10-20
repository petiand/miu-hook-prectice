import { createContext, useState } from "react";

export const Context = createContext();

const ThemeContext = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Context.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
};

export default ThemeContext;
