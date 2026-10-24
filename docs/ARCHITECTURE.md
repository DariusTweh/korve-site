# KORVE theme architecture

## Audit summary

- Shopify Online Store 2.0 theme based on Ritual 4.3.0.
- JSON templates compose reusable Liquid sections and nested theme blocks.
- `sections/header-group.json` owns the announcement/header stack; the existing header already provides responsive drawer navigation, search, account, localization, and cart count.
- `templates/product.json` uses Ritual's native media gallery, variant picker, product form, accelerated checkout, sticky add-to-cart, disclosures, and recommendations.
- `templates/collection.json` uses Shopify storefront filters, sorting, grid-density controls, and progressive loading.
- `snippets/cart-drawer.liquid` and the associated web components own AJAX quantity, removal, discount, pricing, and empty-cart behavior.
- `assets/base.css` is the theme foundation. KORVE-specific tokens and presentation live in `assets/korve.css`; lightweight reveal behavior lives in `assets/korve.js`.

## Implementation approach

The redesign preserves the theme's tested commerce primitives and adds a KORVE presentation layer. The homepage is composed from merchant-editable KORVE sections plus Ritual's native product-list section so product data, availability, swatches, pricing, and quick-add stay connected to Shopify.

New editable sections:

- `korve-hero.liquid`: separate desktop/mobile campaign images and editable copy/CTA.
- `korve-category-grid.liquid`: collection-picker blocks; blank collections render no customer-facing link.
- `korve-brand-statement.liquid`: campaign image, editable statement, optional story link.
- `korve-lookbook.liquid`: mixed portrait/wide image blocks with optional captions and links.
- `korve-newsletter.liquid`: Shopify customer form with consent and success/error feedback.

## Design system

- Black `#111111`
- Warm ivory `#F5F1E9`
- Soft gray `#E7E5E1`
- Deep chocolate `#382C28`
- Accent yellow `#E8E441`
- Fluid editorial type and spacing use `clamp()` tokens in `assets/korve.css`.
- Motion is limited to image hover, header-native transitions, and intersection reveals; `prefers-reduced-motion` disables it.

## Merchant content requirements

- Select real collections for every category block and the featured-products section.
- Select the hero CTA target and upload separate desktop/mobile campaign crops.
- Upload brand-statement and lookbook photography; add only real product/collection destinations.
- Configure the main and footer menus in Shopify Navigation, including contact, shipping, returns, privacy, and terms destinations that exist.
- Add product materials, care, size guide, and shipping/returns content to product descriptions or configured disclosure blocks/metafields.
- Confirm the provisional slogan and statement before publishing.
