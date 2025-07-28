const fs = require('fs');
const path = require('path');

const eventsPath = path.join(__dirname, 'events.json');
const events = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));

const items = events.map(evt => {
  const pubDate = new Date(evt.date).toUTCString();
  return `  <item>\n    <title>${evt.title}</title>\n    <link>${evt.url}</link>\n    <description>${evt.location}</description>\n    <pubDate>${pubDate}</pubDate>\n  </item>`;
}).join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n<channel>\n  <title>Checkpoint Events</title>\n  <link>https://checkpoint-community.github.io/</link>\n  <description>Upcoming and past events</description>\n${items}\n</channel>\n</rss>\n`;

fs.writeFileSync(path.join(__dirname, 'events.xml'), rss);
