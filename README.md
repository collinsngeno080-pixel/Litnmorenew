# Lit & More website (redesign)

Plain HTML and CSS. No build step and no framework. Open `index.html` in a browser to preview.

## Files

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services (Trial Binders and eDiscovery) |
| `how-it-works.html` | How It Works |
| `about.html` | About Us and all reviews |
| `resources.html` | Litigation Stats and EDRM |
| `contact.html` | Contact and project form |
| `css/styles.css` | Shared styles. Brand colors are at the top under `:root`. |
| `js/main.js` | Mobile menu and contact form behavior |

## Before going live

1. **Pictures:** search for `PICTURE SLOT` (4 slots). Replace each dashed box with an `<img>` and put the photos in an `images/` folder.
2. **Red-bracket placeholders** (`class="ph"`): year founded and company story (about.html), office hours (contact.html), and summaries for Litigation Stats and EDRM (resources.html).
3. **Contact form:** it currently shows a thank-you message only. Connect it to your form handler or email service (see the note in `js/main.js`).
4. **Logo:** the red "L&M" square is a stand-in. Swap in your real logo image in the header of each page.
5. **Links:** Terms and Privacy point to `#terms` / `#privacy`. Point them at your real pages.
6. **WordPress or a site builder:** if the site runs on one, copy each page's sections into that page and paste `css/styles.css` into the theme's custom CSS.
