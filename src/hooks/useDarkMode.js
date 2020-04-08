import useLocalStorage from "../hooks/useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, intValue) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, intValue);

  const toggleDarkMode = (event) => {
    event.preventDefault();
    return darkMode ? setDarkMode(false) : setDarkMode(true);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode, toggleDarkMode];
};

export default useDarkMode;
