# HJMOPS PWA – GitHub Pages Deployment

* **Deployed:** 2025-07-23 (UTC)
* **Repo:** https://github.com/Rmcgovern1995/HJMOPS-PWA
* **Live URL:** https://rmcgovern1995.github.io/HJMOPS-PWA/

### Commits
- e825cb9 – add sw.js at root
- f332eed – add manifest.json at root
- b0fcd82 – initial commit of core JS and data (workers and placeholders)
- Additional earlier commits for HTML and CSS files.

### Steps
1. Created root-level `manifest.json` and `sw.js` files with appropriate PWA configuration and service worker caching.
2. Added minimal data files (`allowablesDataPlain.js`, `townsDataPlain.js`) in a `data` folder at the repository root.
3. Added JavaScript files for worker pool, event bus, crypto worker, and calc worker under `js/` directory, along with `app.js` stub.
4. Enabled GitHub Pages for the repository (branch `main`, folder `/`).
5. Waited until the Pages build status was `built` and confirmed the site URL became live.
6. Verified that the login overlay appears and the service worker registers successfully on the live site.
