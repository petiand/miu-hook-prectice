import { useContext } from "react";
import { Context } from "../context/ThemeContext";

const useTheme = () => {
  const context = useContext(Context);

  return context;
};

export { useTheme };
