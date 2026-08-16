# How to edit the menu, hours, and links

All editable content lives in one file: [`src/data/restaurant.json`](src/data/restaurant.json)

You can edit it directly on GitHub.com (click the pencil icon on the file, edit, commit) — the site rebuilds and publishes automatically within about a minute, on all three languages (English, Swedish, Spanish) at once.

## Change opening hours

Find the `locations` section and edit the time for the day you want to change:

```json
"hours": {
  "monday": "17:00-23:00",
  "tuesday": "17:00-23:00",
  ...
}
```

To mark a day as closed, write `"closed"` instead of a time range.

## Change prices

Each menu item has one of these price formats:

```json
{ "priceNormal": "13€", "priceXXL": "20€" }
{ "price": "13€" }
{ "priceGlass": "4€", "priceBottle": "11€" }
```

Just change the numbers. Don't add words like "Normal" or "Glass" into the price fields — those are added automatically in the right language.

## Change a name or description

Names and descriptions are written in three languages at once:

```json
"name": { "en": "Hawaii", "sv": "Hawaii", "es": "Hawaii" },
"description": { "en": "Ham & Pineapple", "sv": "Skinka, Ananas", "es": "Jamón y Piña" }
```

Edit the text after the language code you want to change. Leave the other two languages alone unless you want to update them too.

## Add a brand new menu item

Copy an existing item inside the right category's `items` list, then edit the number, name, description and price. Make sure every item except the last one in a list ends with a comma `,`.

## Add a temporary closure (holiday, vacation, etc.)

Each location can have a `closures` list — dates when it's closed even though the weekly hours say otherwise. Shows an automatic warning banner on the site while the dates are current or upcoming, and disappears by itself afterwards:

```json
"closures": [
  { "from": "2026-09-01", "to": "2026-09-03" }
]
```

Use `YYYY-MM-DD` format. For a single closed day, use the same date for `from` and `to`. Add more entries (comma-separated) for multiple closures. You can delete old ones once they've passed, or just leave them — they stop showing automatically.

## Change delivery links

Each location has a `delivery` list:

```json
"delivery": [
  { "name": "Uber Eats", "url": "https://www.ubereats.com/es/store/pizza-xxl-cabo-roig/..." }
]
```

Update the `url` if a store link changes. Only "Uber Eats" shows a logo image today — other platform names show as plain text until a logo is added.

## Change social media links

- Facebook is per location — edit the `"facebook"` field inside each location.
- Instagram is shared by both locations — edit it in the top-level `"socials"` list.

```json
"socials": [
  { "name": "Instagram", "url": "https://www.instagram.com/xxlpizza/" }
]
```

## Important: don't break the file format

- Every piece of text must stay inside double quotes `"like this"`.
- Every item (except the last one in a list) needs a comma `,` at the end.
- If you accidentally break the format, the automatic build will simply fail and the **live site keeps showing the previous working version** — nothing breaks for visitors. Just fix the mistake (or ask Claude to fix it) and it will republish automatically.
