# Previewing the KORVE redesign

The repository is on the `redesign` branch and has not been deployed.

## Local development preview

1. Install Shopify CLI and authenticate with an account that has theme access.
2. From the repository root, run:

   ```sh
   shopify theme dev --store your-store.myshopify.com
   ```

3. Open the password-protected preview URL printed by the CLI. Use the theme editor link to select real collections, navigation menus, and campaign images.

## Unpublished Shopify preview

After merchant review, upload a new unpublished theme (never target the live theme ID):

```sh
shopify theme push --unpublished --store your-store.myshopify.com
```

The CLI returns a theme-editor URL and a shareable preview URL. Publishing remains a separate Shopify Admin action and is intentionally outside this repository workflow.

## QA checklist requiring a connected store

- Test every product option combination, unavailable variant, add-to-cart, accelerated checkout button, and sticky add-to-cart.
- Test cart quantity updates, removal, discount codes, empty state, and checkout handoff.
- Confirm Search & Discovery filters and sorting against the production catalog.
- Verify all header/footer navigation and policy destinations exist.
- Confirm desktop/mobile campaign crops and image focal points in the theme editor.
- Submit the newsletter form with valid and invalid addresses and confirm Shopify customer tagging.
- Test keyboard navigation, focus order, drawer focus trapping, and screen-reader labels.
- Compare Core Web Vitals on the preview theme before publishing.
