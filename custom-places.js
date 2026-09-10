// Team picks shared with everyone.
//
// Two ways to share with the whole team (both need a commit + push):
//
// 1. TEAM_PICKS — names of places already on the map that the team endorses.
//    Marking a place as a team pick in the UI only saves it in your own
//    browser; add its exact name here to give it the badge for everyone.
//    Matching is case-insensitive; if two branches share a name, both get it.
//
// 2. SHARED_CUSTOM — places that aren't on the map at all. Places added
//    through the "Add place" button are saved only in your own browser;
//    to share one, add it here. Fields: n = name, la/lo = latitude/longitude,
//    c = category id (see CATEGORIES in data.js), cu = cuisine/note,
//    a = address, u = website, h = opening hours.
const TEAM_PICKS = [
  "Fuzzy's Grub",
];
const SHARED_CUSTOM = [
  // {"n": "Example: secret bánh mì cart", "la": 51.5175, "lo": -0.0775, "c": "asian", "cu": "bánh mì, cash only", "a": "", "u": "", "h": ""},
];
