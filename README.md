# LAW / NOT LAW

LAW / NOT LAW is a tiny educational web game about recognizing primary sources of law. Each round presents 10 shuffled cards. Players choose `LAW` or `NOT LAW`, get immediate feedback, and move to the next card.

## Run locally

The game has no build step and no dependencies. Open `index.html` directly, or serve the folder with any static web server:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Edit or add cards

Open `game.js` and edit the `CARD_LIBRARY` array. Each card has three fields:

```js
{
  title: "Federal statute",
  answer: "law",
  explanation: "A statute enacted by Congress is a primary source of law.",
}
```

Use `"law"` for constitutions, statutes, regulations, judicial opinions, and court rules. Use `"not-law"` for secondary sources, advocacy documents, summaries, research aids, and ordinary filings.

Rounds intentionally select five cards from each category, then shuffle them. Change `ROUND_LENGTH` and `buildBalancedDeck()` together if you want a different mix.

## Deploy with GitHub Pages

This repository includes a Pages workflow at `.github/workflows/pages.yml`.

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source.
4. Push to `main`, or run the workflow manually from the **Actions** tab.

The deployed URL will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Accessibility

The game supports keyboard input (`L`, `N`, then `Enter`), visible focus states, large tap targets, live feedback announcements, dark mode, and reduced-motion preferences.
