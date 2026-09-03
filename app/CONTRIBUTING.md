# Contributing to this design system

Figma is the source of truth: **Punch Desktop Design System**
(https://www.figma.com/design/y1hJPuNFlUlkgYIYfVL2k5/Punch-Desktop-Design-System).

## Adding or changing a component

1. Get the Figma node ID for the component (from the share link's `node-id` param).
2. Pull colors/typography as tokens into `src/styles/tokens.css` first — never hardcode a hex value in a component's CSS if a token exists or should exist.
3. Build the component under `src/components/<Name>/`:
   - `<Name>.tsx`
   - `<Name>.module.css`
   - `<Name>.stories.tsx`
4. Add a JSDoc comment above the component function referencing the Figma node ID it was built from. Add a one-line JSDoc comment above every prop — these feed Storybook's autodocs, so they're the only "notes" this project uses.
5. Write a story for every variant and every interactive state (hover/focus/disabled), not just the default.
6. Visually verify against Figma before calling it done — run Storybook, screenshot the story, compare against the Figma frame. Don't eyeball it from the code.
7. Add a `CHANGELOG.md` entry.

## Conventions

- CSS Modules per component, not global CSS or inline styles (except one-off Storybook decorators/demo wrappers).
- Real browser states (`:hover`, `:focus-visible`, `:disabled`) instead of props that fake them — Figma's "Status" variant becomes CSS pseudo-classes, not a `status` prop.
- Icons are consumer-supplied `ReactNode` props (`leftIcon`/`rightIcon`), not baked into the component — keeps it framework-idiomatic instead of copying Figma's boolean-flag API literally.
