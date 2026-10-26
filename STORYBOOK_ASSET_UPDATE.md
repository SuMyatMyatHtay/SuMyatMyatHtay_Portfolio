# Storybook Asset Update

The Home page storytelling section now uses the illustration assets supplied by Sera rather than a CSS-drawn approximation.

## Supplied assets now used

- `public/storybook/backdrop.jpg`
- `public/storybook/tree-parts.png`
- `public/storybook/front-barriers.png`
- `public/storybook/animal-fox.png`
- `public/storybook/animal-squirrel.png`
- `public/storybook/branch-tag.png`
- `public/storybook/ornament-tag.png`

The PNG files were prepared with transparent outer backgrounds so the layers can be stacked over the backdrop.

## Interaction

- Hover/focus/tap a category badge to light up its branch.
- Hovering a story ornament also activates its category branch.
- Click/tap an ornament to open the existing storybook modal.
- Escape, the close button, or clicking the overlay closes the modal.
- Idle sway and pop animations remain disabled for users who prefer reduced motion.

## Themes

The same artwork is retained in both themes so the composition stays faithful to the supplied reference.

- Light mode keeps the warm cream/pastel storybook palette.
- Dark mode applies a dusk/night treatment to the backdrop and illustration layers, while keeping branch-specific glow colors.

## Story photographs

These are still expected at:

- `public/story/academic.jpg`
- `public/story/sports.jpg`
- `public/story/student-life.jpg`
- `public/story/community.jpg`
- `public/story/hobbies.jpg`
- `public/story/myanmar.jpg`

The photo in each file appears inside its hanging ornament and in the larger modal.
