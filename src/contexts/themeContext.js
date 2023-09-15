import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);

  function toggleTheme() {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
