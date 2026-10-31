# Verification — 31 October 2026

## Hayla Khiban color correction

- Rechecked the Hayla folder and the 26 October labelled chart through connected Google Drive. The client-supplied chart contains 15 colors; the older September folder exports contained 18 choices and caused the mismatch.
- Replaced the selectable colors with exactly the current chart names, kept the full authentic chart available for every selection, and sampled the color dots from that photo. Older colors are not retained as orderable legacy variants. The price remains Rp40,000 and all seven other product records are unchanged.
- `npm test`: 10 tests passed, including the exact chart list and rejection of retired colors in saved carts. `npm run build`: TypeScript, 14 prerendered routes, and all referenced local assets/links passed.
- Browser checks passed at 390 and 1366px: all 15 selections, chart switching and zoom, exact names and prices in all 30 generated WhatsApp drafts, catalog count, direct links, adding a new color to the bag, and removal of an obsolete saved shade. No overflow, broken images, or browser errors were found. Desktop detail and mobile catalog screenshots were visually reviewed.

## Instagram and Pashmina Tencel revision

- `npm test`: all 8 tests passed with the eight authorized products and prices.
- `npm run build`: TypeScript, Vite, all 14 prerendered routes, and 55 referenced local assets/links passed verification.
- Browser checks passed for home, catalog, and Pashmina Tencel detail at 360, 768, and 1366px. No document overflow, broken images, or browser errors were found. Mobile/desktop footer, new product detail/card, and the eight-column collection index were visually inspected.
- Instagram appears in the shared footer as `@ameraah.co`, linking to `https://www.instagram.com/ameraah.co/` in a new tab.
- Pashmina Tencel displays Rp45,000 with no variants or invented photographs. Its inquiry link targets `6281533330018` with the product name and price. Category filtering, search, saving, and persistence after reload passed. The original seven product records are unchanged.
- Production URL and Vercel integration were confirmed through GitHub metadata and the existing successful deployment status. The production branch is `main`.

## Initial verification — 29 October 2026

- `npm test`: 8 tests passed. Exact seven client prices, all 137 shade mappings and responsive image files, cart merging and validation, current subtotals, encoded WhatsApp orders, photo selection, and brand isolation.
- `npm run build`: TypeScript and Vite passed. All 13 prerendered HTML routes, product schema, referenced assets/links, 404 output, and supplier-cost exclusion passed the build verifier.
- Browser: home, catalog, and Viscose Gradasi detail checked at 360, 768, and 1366px. No document overflow or completed image with zero natural width. Mobile layout also visually inspected at 390px.
- Selected Creamy Nude, quantity 2: unit price Rp57,000 and subtotal Rp114,000. The generated order URL targets `6281533330018` and preserves the exact variant and quantity. No WhatsApp message was sent.
- Adding to the bag, favorite selection, favorite listing, and bag persistence after reload were verified through the rendered UI. Ciput remains a priced photo inquiry.

The initial delivery did not connect hosting. The active Vercel hosting is documented in the 31 October revision above.
