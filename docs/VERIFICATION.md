# Verification — 29 October 2026

- `npm test`: 8 tests passed. Exact seven client prices, all 137 shade mappings and responsive image files, cart merging and validation, current subtotals, encoded WhatsApp orders, photo selection, and brand isolation.
- `npm run build`: TypeScript and Vite passed. All 13 prerendered HTML routes, product schema, referenced assets/links, 404 output, and supplier-cost exclusion passed the build verifier.
- Browser: home, catalog, and Viscose Gradasi detail checked at 360, 768, and 1366px. No document overflow or completed image with zero natural width. Mobile layout also visually inspected at 390px.
- Selected Creamy Nude, quantity 2: unit price Rp57,000 and subtotal Rp114,000. The generated order URL targets `6281533330018` and preserves the exact variant and quantity. No WhatsApp message was sent.
- Adding to the bag, favorite selection, favorite listing, and bag persistence after reload were verified through the rendered UI. Ciput remains a priced photo inquiry.

Production hosting for this new repository has not been connected by this work. Import the repo into the intended host using the README instructions.
