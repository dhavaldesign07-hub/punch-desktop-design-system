# Changelog

Format follows [Keep a Changelog](https://keepachangelog.com/). Dates in YYYY-MM-DD.

## 2026-09-02 (2)

### Added
- `Documentation` section in Storybook's sidebar: `Contributing` and `Changelog` MDX pages that render this repo's `CONTRIBUTING.md`/`CHANGELOG.md` live (via a raw import), so the docs shown to engineers can't drift from the actual files.

## 2026-09-02

### Added
- Project scaffolded: Vite + React + TypeScript + Storybook 10 (`app/`).
- `Button` component built from Figma node `12764:14524` (CTAs component set): `success` / `error` / `warning` / `secondary` variants, `disabled` state, `leftIcon`/`rightIcon` slots, real `:hover`/`:focus-visible` states matching Figma's hover/focus tokens.
- Design tokens extracted into `src/styles/tokens.css` (button backgrounds, outlines, hover tints, typography).
- `ChevronRightIcon` extracted as a reusable `currentColor` SVG icon component.
- Storybook stories for every Button variant, disabled state, and icon placements, plus a dark-surface preview decorator matching the Figma canvas.
- `CONTRIBUTING.md` — process for adding new components.

### Fixed
- Button icon layout: icons are pinned 16px from each edge (per Figma node `12787:3198`) with the label independently centered, instead of being clustered next to the label via flexbox gap.
- Storybook dark-surface decorator was stretching to full viewport height (`min-height: 100vh`); changed to shrink-wrap the content.
- Button default width set to the Figma spec's fixed 328px (was previously left as intrinsic/content-based).
- System-level: repaired a broken Homebrew OpenSSL CA bundle symlink (`~/homebrew/etc/openssl@3/cert.pem`) that was blocking all `npm`/Node HTTPS traffic on this machine.
