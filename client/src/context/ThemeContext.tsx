import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";

interface ThemeContextValue {
  theme: "light";
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.add("theme-light");
    root.dataset.theme = "light";
    document.body.classList.add("theme-light");
    document.body.dataset.theme = "light";
  }, []);

  const value: ThemeContextValue = useMemo(
    () => ({
      theme: "light" as const,
    }),
    [],
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
