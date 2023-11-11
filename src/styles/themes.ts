/** String representations of CSS Variables stored in this object. */
export const colorVars = {
  primary400: '--color-primary-400',
  primary500: '--color-primary-500',
  primary600: '--color-primary-600',
  secondary500: '--color-secondary-500',
  typography300: '--color-typography-300',
  typography400: '--color-typography-400',
  typography500: '--color-typography-500',
  background: '--color-background',
} as const

type ThemeType = Record<(typeof colorVars)[keyof typeof colorVars], string>

/// ===========================================================================
// Themes
// ===========================================================================

/** This is the default theme ☀️! */
const light: ThemeType = {
  '--color-primary-400': '96 165 250',
  '--color-primary-500': '59 130 246',
  '--color-primary-600': '37 99 235',
  '--color-background': '255 255 255',
  '--color-secondary-500': '',
  '--color-typography-300': '163 163 163',
  '--color-typography-400': '64 64 64',
  '--color-typography-500': '10 10 10',
}

/** Dark theme 😎! */
const dark: ThemeType = {
  '--color-primary-400': 'green',
  '--color-primary-500': 'green',
  '--color-primary-600': 'green',
  '--color-background': 'black',
  '--color-secondary-500': '',
  '--color-typography-300': 'green',
  '--color-typography-400': 'green',
  '--color-typography-500': 'green',
}

export const themes = {
  light: light,
  dark: dark,
}

/** Use this for applying the theme server-side */
export function createStyleStringFromTheme(theme: ThemeType) {
  let styleString = ''

  // Iterate over the keys of the theme object
  Object.keys(theme).forEach((key) => {
    // If the value of the key is not an empty string, add it to the style string
    if (theme[key as keyof ThemeType] !== '') {
      styleString += `${key}: ${theme[key as keyof ThemeType]}; `
    }
  })

  // Return the style string without the trailing space
  return styleString.trim()
}
