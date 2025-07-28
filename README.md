# Checkpoint Community Website

This repository contains the static files used for the Checkpoint community website which is served via GitHub Pages.

## Updating the events list

Event information is stored in `events.json`. After modifying this file, run the Node.js script `generate-rss.js` to regenerate the RSS feed:

```bash
node generate-rss.js
```

This command produces `events.xml`, which is published to the site so visitors can subscribe to the events feed.

The website itself reads from `events.json` at runtime to render the upcoming and past events on `index.html`.

## Notes

- `events.xml` must be committed after running the script so the RSS feed is available on the live site.
- `generate-rss.js` is only needed locally and is excluded from the GitHub Pages output via the site configuration.

