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

export const themes = ['light', 'dark', 'system', 'batman'] as const;

export const intrinsicMap: Record<
  Exclude<(typeof themes)[number], 'system'>,
  'light' | 'dark'
> = {
  light: 'light',
  dark: 'dark',
  batman: 'dark',
} as const;

export type Theme = (typeof themes)[number];

export type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  /** A theme value that doesn't include 'system' because it will be inferred. */
  inferredTheme: Exclude<Theme, 'system'>;
  /** Infers what any theme is intrinsically 'light' or 'dark'. */
  intrinsicTheme: 'light' | 'dark';
};

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  setTheme: () => {},
  inferredTheme: 'light',
  intrinsicTheme: 'light',
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
    defaultValue: 'light',
  });

  /** For logic that relies on literally just `light` or `dark` themes (i.e. CodeMirror). Also infers system. */
  const [inferredTheme, setInferredTheme] =
    useState<Exclude<Theme, 'system'>>('light');

  const [intrinsicTheme, setIntrinsicTheme] = useState<'light' | 'dark'>(
    'light'
  );

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
    setIntrinsicTheme(intrinsicMap[themeValue]);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        inferredTheme,
        intrinsicTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
