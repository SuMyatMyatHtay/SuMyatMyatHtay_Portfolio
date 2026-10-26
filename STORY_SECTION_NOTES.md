# Story section setup

The old About page has been removed. The Home page now contains a visual story tree.

## Photos to add
Put these files in `public/story/`:
- `academic.jpg`
- `sports.jpg`
- `student-life.jpg`
- `community.jpg`
- `hobbies.jpg`
- `myanmar.jpg`

For the hero portrait, put these files in `public/`:
- `sera-light.jpg` — photo for the pink/princess theme
- `sera-dark.jpg` — photo for the cyber/dark theme

Until the story photos exist, the preview cards intentionally show a cute placeholder with the exact expected path.

## Content to edit
All story labels and text are in `data/portfolio.ts` under `storyItems`.

I used your known academic competition results. Sports entries are intentionally placeholders because no exact sports prize names/dates were provided, so nothing was invented.

## Interaction
- Desktop: hover/focus a branch badge to change the large preview.
- Mobile/tablet: tap a branch badge to open the story card.
- Light theme: pink storybook tree.
- Dark theme: glowing enchanted/cyber tree.
