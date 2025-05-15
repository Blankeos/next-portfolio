'use client';

import { useLocalStorage } from '@mantine/hooks';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

// ===========================================================================
// Context
// ===========================================================================

export const themes = ['light', 'dark', 'system'] as const;

export type Theme = (typeof themes)[number];

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  inferredTheme: Exclude<Theme, 'system'>;
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  setTheme: () => {},
  inferredTheme: 'light',
});

// ===========================================================================
// Hook
// ===========================================================================
export const useThemeContext = () => useContext(ThemeContext);

// ===========================================================================
// Provider
// ===========================================================================
export const ThemeContextProvider: React.FC<{ children: ReactNode }> = (
  props
) => {
  const [theme, setTheme] = useLocalStorage<Theme>({
    key: 'carlo-portfolio-theme',
    defaultValue: 'system',
  });

  /** For logic that relies on literally just `light` or `dark` themes (i.e. CodeMirror). Also infers system. */
  const [inferredTheme, setInferredTheme] =
    useState<Exclude<Theme, 'system'>>('light');

  useEffect(() => {
    let themeValue = theme;

    if (themeValue === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      themeValue = prefersDark ? 'dark' : 'light';
    }

    themes.forEach((themeName) => {
      if (themeValue === themeName) {
        document.documentElement.classList.add(themeName);
      } else {
        document.documentElement.classList.remove(themeName);
      }
    });

    setInferredTheme(themeValue);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        inferredTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
