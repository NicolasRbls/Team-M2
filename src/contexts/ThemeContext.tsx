import { createContext, useState, useMemo, ReactNode } from 'react';

export const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
