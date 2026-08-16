# How to edit the menu and opening hours

All editable content lives in one file: [`src/data/restaurant.json`](src/data/restaurant.json)

You can edit it directly on GitHub.com (click the pencil icon on the file, edit, commit) — the site rebuilds and publishes automatically within about a minute.

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

## Change prices or menu items

Find the `menu` section. Each item looks like this:

```json
{ "number": 3, "name": "Hawaii", "description": "Ham & Pineapple", "price": "Normal 13€ | XXL 20€" }
```

Just change the text inside the quotes. For a single-price item (no XXL size), use e.g. `"price": "13€"`.

## Add a brand new menu item

Copy an existing line inside the right category's `items` list, then edit it. Make sure every item except the last one in a list ends with a comma `,`.

## Important: don't break the file format

- Every piece of text must stay inside double quotes `"like this"`.
- Every item (except the last one in a list) needs a comma `,` at the end.
- If you accidentally break the format, the automatic build will simply fail and the **live site keeps showing the previous working version** — nothing breaks for visitors. Just fix the mistake (or ask Claude to fix it) and it will republish automatically.
