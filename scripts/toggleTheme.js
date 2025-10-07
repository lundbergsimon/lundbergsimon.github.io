(() => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return; // nothing to do if toggle isn't present

  const THEME_KEY = 'theme';
  // Set this to true to default to light, false to default to dark
  const DEFAULT_IS_LIGHT = false;

  const root = document.documentElement;

  function setTheme(isLight) {
    root.classList.toggle('light', isLight);
    // update the checkbox to reflect current state (checked = light)
    toggle.checked = isLight;
    // persist choice
    try {
      localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
    } catch (e) {
      // ignore storage errors
    }
  }

  // Initialize from localStorage (if present) otherwise use default
  let initialIsLight = DEFAULT_IS_LIGHT;
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      initialIsLight = saved === 'light';
    }
  } catch (e) {
    // ignore
  }

  setTheme(initialIsLight);

  // When the checkbox changes, apply and persist the new theme (checked = light)
  toggle.addEventListener('change', () => setTheme(toggle.checked));
})();
