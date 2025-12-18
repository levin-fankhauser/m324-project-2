"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("theme") as Theme | null;

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.toggle("dark", theme === "dark");
  root.style.setProperty("--background", theme === "dark" ? "#0a0a0a" : "#ffffff");
  root.style.setProperty("--foreground", theme === "dark" ? "#ededed" : "#171717");
  root.style.setProperty("color-scheme", theme);

  window.localStorage.setItem("theme", theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const preferredTheme = getPreferredTheme();

    if (preferredTheme !== theme) {
      // Hydrate the theme from the user/device preference on first render.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(preferredTheme);
    }
  }, [theme]);

  useEffect(() => {
    if (!theme) {
      return;
    }

    applyTheme(theme);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme: theme ?? "light",
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
