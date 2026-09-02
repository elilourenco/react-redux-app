# de la Mina Lab — static front-end design branch

This `static-frontend` branch is the shared design workspace for de la Mina Lab. The current priority is to finish the complete website design here before doing any further WordPress implementation.

The site is intentionally static and framework-free. It uses only HTML, CSS, and JavaScript, with no PHP, WordPress, CMS, database, or build tooling. This keeps front-end design work quick and easy to review.

## Live preview

Cloudflare Pages automatically publishes this branch at:

**[https://delaminalab.pages.dev](https://delaminalab.pages.dev)**

Push committed changes to `static-frontend` to update the live preview. Use this URL to review the latest design together.

## Project workflow

### 1. Complete the front-end design

- Work only on the `static-frontend` branch during the design phase.
- Finish the layout, responsive behaviour, typography, colours, content, images, and interactions across every page.
- Keep the implementation in plain HTML, CSS, and JavaScript.
- Check the local site and the Cloudflare Pages preview before approving design changes.

### 2. Convert the approved design to WordPress

Once the complete static website looks and works as intended, use this branch as the visual and front-end reference for the WordPress implementation on the WordPress branch (`main`, or a dedicated branch created from `main`). Port the approved HTML structure, CSS, and JavaScript into the existing WordPress templates, template parts, block patterns, `theme.json`, and WooCommerce views.

Do not replace or blindly merge the static branch into the WordPress branch. The two branches have different purposes and histories. Reimplement the approved static design within the WordPress theme so WordPress and WooCommerce can provide dynamic content and functionality.

## Static page map

| Static file | WordPress equivalent |
| --- | --- |
| `index.html` | Front page and fallback index |
| `objects.html` | WooCommerce product archive |
| `product.html` | WooCommerce single product |
| `artists.html` | Artists page and artist-list pattern |
| `collaborations.html` | Collaborations landing page (linked from existing homepage content) |
| `page.html` | General page template |
| `article.html` | General post/single template |

The product button is visual only; no cart, checkout, login, CMS, or WordPress behavior is included.

## Working in this branch

- Edit page structure and content in the relevant HTML file.
- Add responsive visual rules in `styles.css`.
- Keep interactions small and dependency-free in `script.js`.
- Put future images, fonts, and icons in an `assets/` folder and reference them with relative paths.

## WordPress handoff

When the design is approved, the WordPress team can map the static page directly:

| Static section | Suggested WordPress implementation |
| --- | --- |
| Header and footer | Shared template parts or reusable blocks |
| Hero and callout | Custom blocks with editable heading, copy, and link fields |
| Project grid | Query Loop / custom post type for projects |
| Approach list | Repeater fields or an editable custom block |

No build tooling, framework, API, backend behaviour, WordPress logic, or functional WooCommerce checkout is included on this branch.
