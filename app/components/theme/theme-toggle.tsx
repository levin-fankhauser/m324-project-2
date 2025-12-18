"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="fixed right-5 top-5 z-[1000]">
      <button
        type="button"
        onClick={toggleTheme}
        aria-pressed={isDark}
        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </div>
  );
}
