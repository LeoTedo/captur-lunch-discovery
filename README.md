# Captur Lunch Radar 🍜

A single-page map for deciding where to go for lunch from the Captur office at
**8 Devonshire Square, London EC2M 4YJ**. Every restaurant, café, and food spot
within a ~10-minute walk, plotted on a dark Captur-branded map.

**Live site:** https://leotedo.github.io/captur-lunch-discovery/

## Features

- 🗺️ **242 real places** within a 10-minute walk, pulled from OpenStreetMap,
  with emoji markers by cuisine and 5/10-minute walk rings around the office.
  Three house rules keep the list honest:
  - no major high-street chains (Pret, Greggs, Itsu, Costa, McDonald's, …)
  - no coffee shops — this is a lunch map
  - nothing over ~£15 a meal (fine dining, steakhouses, and hotel
    restaurants are curated out by name — OSM has no price data)
- 🔍 Search, category filter chips (double-click a chip to isolate it, and an
  all/none toggle), and a max-walk-time slider
- 🟢 **Open now** filter — opening hours from OSM are parsed client-side;
  green/red dots in the list show live open/closed status (70 of 242 places
  have hours data; the filter hides places with no data)
- 🌱 **Dietary filters** — vegetarian (33), vegan (22), and halal (6), from
  OSM diet tags, so coverage is only as good as the tagging
- 🎡 **Wheel of Lunch** — spins across 12 contenders drawn from your current
  filters; the wheel's verdict is final
- 📍 **Add place** — click the button, click the map, fill in the form. Saved
  in your browser's localStorage
- ⭐ **Team picks** — mark any place as a team pick from its popup, and
  filter down to just the picks with the ⭐ chip. Marks are per-browser;
  commit a name to `TEAM_PICKS` in [custom-places.js](custom-places.js) to
  give it the badge for everyone
- 🚶 Walk-time estimates and one-click Google Maps walking directions

## Sharing picks and places with the whole team

Places added and picks marked through the UI live only in your own browser.
[custom-places.js](custom-places.js) is the shared layer — commit and push to it:

- add a place name to `TEAM_PICKS` to badge an existing place for everyone
- add an entry to `SHARED_CUSTOM` to put a missing place on everyone's map

## Running locally

Any static server works:

```bash
python3 -m http.server 4173
```

then open http://localhost:4173.

## Refreshing the restaurant data

`data.js` is a snapshot generated from the [Overpass API](https://overpass-api.de/)
(query: `restaurant | fast_food | cafe | food_court` within 800 m of the office),
filtered to an estimated ≤10-minute walk (straight-line distance × 1.25 route
factor at 80 m/min) and categorised by cuisine tag. Major chain names are then
filtered out (ambiguous short names like "Pho" or "Leon" only match exactly, so
independents like "Delicious Pho" survive). Re-run the same query any time the
area changes and regenerate the file.

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, ODbL.

## Hosting (GitHub Pages)

The site is plain static files, deployed from the `main` branch root via
GitHub Pages: repo **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
Every push to `main` redeploys automatically.
