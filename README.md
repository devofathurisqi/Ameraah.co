# Ameraah.co

Independent VuyamaLabs storefront for the Vuyama reseller community. VuyamaLabs creates brand-specific online catalogs using verified supplier product information and authentic photographs, while keeping each reseller’s pricing, identity, contacts, and shopping storage independent.

## Start here — agent handoff

Read this README, docs/DESIGN-BRIEF.md (the working prompt and quality criteria), docs/catalog-sources.json, src/config.ts, and src/data/products.json before changing anything. The user approved building this catalog, committing it, and pushing to https://github.com/devofathurisqi/Ameraah.co.git. Do not modify another store or copy its retail overrides, WhatsApp number, or deployment identity.

## Brand and content

Deep maroon #591E30, warm cream #F8F4EB, serif typography, restrained asymmetric editorial composition. The supplied original logo is public/assets/brand/official-logo.jpeg; its lettering is displayed from the original image using a CSS crop. Preserve it. The current tagline is configured centrally in src/config.ts. WhatsApp orders go to **6281533330018** (provided directly by the user on 29 October 2026). Instagram **[@ameraah.co](https://www.instagram.com/ameraah.co/)** was supplied on 31 October 2026 and is linked in the footer.

Exactly eight collections are authorized: Viscose Polos Rp48,000; Viscose Gradasi Rp57,000; Paris Jadul Rp25,000; Hayla Khiban Rp40,000; Ciput Rp17,000; Zea Sport Rp37,000; Pashmina Airflow Rp47,000; Pashmina Tencel Rp45,000. Viscose Polos uses the existing Modal Viscose photography; Paris Jadul is the documented Paris Legend alias. The user explicitly confirmed Pashmina Airflow is the same product as Airtech Ultrasoft. Ciput has no verified supplier photograph. Pashmina Tencel was added on 31 October 2026 with empty variants as requested, following Ciput's photo/variant inquiry flow. Both display their confirmed prices without invented product images or colors.

Product source: https://drive.google.com/drive/folders/1RwtruDL86PYi3TVqILmxrZgZ_XGT1zPv. The September 2026 PDF was rechecked through connected Drive on 29 October 2026, using the **Ecer** column. Supplier procurement costs and the PDF are excluded from public assets. Stock is not synchronized; the seller confirms availability, delivery charges, and payment.

## Architecture

React 19, TypeScript, Vite, React Router. src/pages/Home.tsx and src/theme.css define the brand presentation. src/components/Layout.tsx uses the original logo. Catalog, product detail, favorites, shopping bag, guide, about, and missing-page routes are implemented in src/App.tsx.

- src/config.ts: brand, tagline, WhatsApp, categories, unique browser storage keys.
- src/data/products.json: public runtime catalog and current customer prices.
- src/data/prices.json: explicit brand prices (eight exact supplied values).
- src/data/retail-prices.json: verified retail fallback only.
- src/commerce.ts: cart validation, quantity bounds, merging, current totals, encoded order message.
- src/store.tsx: localStorage persistence and favorites.
- src/product-photos.ts: authentic gallery behavior; model examples remain accessible after choosing fabric/chart shades.
- scripts/prerender.mjs: static HTML per route, product schema, optional canonical URLs and sitemap.
- scripts/verify-build.mjs: route, asset, public-copy and supplier-cost checks.

Update both the product data and price source when changing a selling price. Unknown prices must be null, never zero. Products without verified photos must not be assigned another model’s photograph. Do not rerun another brand’s reconciliation or color-import script against this catalog.

## Run and verify

Use Node.js 22.18 or newer (verified with Node 24.11.1).

```powershell
npm ci
npm run dev
# http://127.0.0.1:4176
npm test
npm run build
npm run preview
```

Build output: dist/. TypeScript and public-build verification are included in npm run build. Tests cover exact authorized prices, all shade/image mappings, current totals, duplicate-color merging, invalid persisted data, inquiry totals, brand isolation, encoded WhatsApp destination, and model gallery behavior. Customer data is optional and only enters the WhatsApp draft; opening the link does not send a message or confirm payment.

## Git and hosting

Repository: https://github.com/devofathurisqi/Ameraah.co.git. Production is hosted at **https://ameraah-co.vercel.app** through the repository's Vercel integration. The deployed branch is **main**; no separate prod branch existed when checked on 31 October 2026. Build with npm run build and publish dist/. The root public assets retain direct URLs and the SPA rewrite handles client routes.

Set SITE_URL to the actual HTTPS production origin in the hosting environment before building if canonical URLs and a sitemap are needed. Without SITE_URL, builds omit them instead of inventing a domain. Keep deployment IDs and secrets out of this repository. After changes, run relevant tests and the build, inspect mobile/desktop pages, commit, and push without force.
