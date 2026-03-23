// theme-script.ts or inside your ThemeProvider file to prevent FOUC (flash-of-unstyled-content)
export const themeScript = `
  (function() {
    try {
      var key = 'carlo-portfolio-theme';
      var theme = localStorage.getItem(key);
      var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

      // bagon-hooks/mantine usually quote strings: "dark" -> dark
      var themeValue = theme ? theme.replace(/"/g, '') : 'system';

      var resolved = themeValue;
      if (themeValue === 'system') {
        resolved = supportDarkMode ? 'dark' : 'light';
      }

      // Immediately add the class to the root
      document.documentElement.classList.add(resolved);

      // Remove others to prevent conflicts
      ['light', 'dark', 'batman'].forEach(function(t) {
        if (t !== resolved) document.documentElement.classList.remove(t);
      });
    } catch (e) { console.error('Theme script failed', e); }
  })();`.replace(/\s+/g, ' ');
