"use client";

import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: VoidFunction;
}

const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {
    console.warn("toggleTheme called outside of ThemeProvider");
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme theme-${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
