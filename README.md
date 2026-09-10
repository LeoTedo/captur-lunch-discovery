# Captur Lunch Radar 🍜

A single-page map for deciding where to go for lunch from the Captur office at
**8 Devonshire Square, London EC2M 4YJ**. Every restaurant, café, and food spot
within a ~10-minute walk, plotted on a dark Captur-branded map.

**Live site:** https://leotedo.github.io/captur-lunch-discovery/

## Features

- 🗺️ **519 real places** within a 10-minute walk, pulled from OpenStreetMap,
  with emoji markers by cuisine and 5/10-minute walk rings around the office
- 🔍 Search, category filter chips (double-click a chip to isolate it), and a
  max-walk-time slider
- 🎡 **Wheel of Lunch** — spins across 12 contenders drawn from your current
  filters; the wheel's verdict is final
- 📍 **Add place** — click the button, click the map, fill in the form. Saved
  in your browser's localStorage
- 🚶 Walk-time estimates and one-click Google Maps walking directions

## Sharing a place with the whole team

Places added through the UI live only in your own browser. To make one show up
for everyone, add it to [custom-places.js](custom-places.js) and push — it will
appear for the whole team with a `TEAM PICK` badge.

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
factor at 80 m/min) and categorised by cuisine tag. Re-run the same query any
time the area changes and regenerate the file.

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, ODbL.

## Hosting (GitHub Pages)

The site is plain static files, deployed from the `main` branch root via
GitHub Pages: repo **Settings → Pages → Deploy from a branch → `main` / `(root)`**.
Every push to `main` redeploys automatically.
