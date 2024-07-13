import { themes } from '@/styles/themes';
import { useEffect } from 'react';

const THEME_LOCALSTORAGE_KEY = 'CARLO_SITE_THEME';

type UnionThemes = keyof typeof themes;

export default function useTheme() {
  // onMount
  useEffect(() => {
    const storedTheme = localStorage.getItem(
      THEME_LOCALSTORAGE_KEY
    ) as UnionThemes | null;

    // No themes exist
    if (!storedTheme) {
      changeTheme('light');
      return;
    }

    changeTheme(storedTheme);
  }, []);

  function changeTheme(theme: UnionThemes) {
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);

    // Change the CSS Variables via JS.
    const themeObject = themes[theme];
    const rootElement = document.querySelector(':root') as HTMLElement;

    // Iterate over the properties of the theme object.
    for (const property in themeObject) {
      const value = themeObject[property as keyof typeof themeObject];

      rootElement.style.setProperty(property, value);
    }
  }
}
