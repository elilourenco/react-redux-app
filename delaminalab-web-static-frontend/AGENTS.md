# Working instructions for de la Mina Lab

These instructions apply to the entire repository while working on the `static-frontend` branch.

## Purpose of this branch

`static-frontend` is the design and front-end prototyping branch. Its purpose is to complete and approve the entire website design before that design is implemented in WordPress.

The live preview is [https://delaminalab.pages.dev](https://delaminalab.pages.dev). Changes pushed to `static-frontend` are expected to appear there through Cloudflare Pages.

## Rules during the design phase

- Work only on `static-frontend` unless the task explicitly begins the WordPress conversion phase.
- Use plain HTML, CSS, and JavaScript only.
- Do not add PHP, WordPress files, CMS integrations, databases, frameworks, package managers, or build steps.
- Keep all static pages visually consistent and responsive.
- Preserve accessible semantic HTML, keyboard navigation, focus states, and reduced-motion support.
- Test links and page layouts locally before committing.
- Commit and push finished changes to `static-frontend` so both collaborators can review them on Cloudflare Pages.

## WordPress conversion phase

Begin WordPress work only after the static front end has been completed and approved.

At that point, treat `static-frontend` as the approved design specification. Start from the WordPress branch (`main`, or a dedicated implementation branch created from `main`) and port the design into the existing WordPress theme architecture:

- shared layout into template parts;
- page layouts into templates;
- reusable sections into block patterns or blocks;
- global design tokens into `theme.json` and theme styles;
- product layouts into WooCommerce templates and blocks;
- static placeholder content into editable WordPress content and fields.

Do not merge the static branch wholesale into the WordPress branch. Preserve the WordPress branch history and functionality while reproducing the approved static design there.
