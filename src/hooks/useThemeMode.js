import { useContext } from "react";
import { Context } from "../context/ThemeContext";

const useThemeMode = () => {
  const context = useContext(Context);

  return context;
};

export { useThemeMode };
