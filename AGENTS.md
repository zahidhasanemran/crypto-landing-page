# Repository Instructions

## Color Token Policy

- Prioritize strict color accuracy and predictability across browsers.
- Do not use computed color functions for design tokens (for example: `color-mix()`).
- Define color tokens using explicit static values only:
  - solid colors: `#RRGGBB`
  - alpha variants: `rgb(r g b / a)`
- Keep all color tokens centralized in the theme/token source (for this repo: `src/app/globals.css` with Tailwind CSS v4 `@theme`).
- Avoid hardcoding one-off color values in components when an existing token is available.
