# Profile Card — Internship task

Small static demo showing a user profile card. Includes a warm, modern design and a live local-time display.

Contents
- `index.html` — markup for the profile card (avatar, name, bio, social links, hobbies/dislikes, and the current time output).
- `style.css` — styles: warm gradient background, glass-like profile card, avatar accent, social link pills, and responsive rules.
- `script.js` — small script that updates the `#user-time` element with a human-readable local date/time including milliseconds and timezone.
- `WhatsApp Image ...jpg` — avatar image used in the demo (local file).

Preview
1. Open a terminal and change directory to the project folder (replace path as appropriate):

```powershell
cd 'C:\Users\USER\Desktop\internship task0'
Start-Process -FilePath .\index.html
```

2. The page will open in your default browser. The "Current Time" area will show a local datetime that updates live.

How the time works
- `script.js` finds the element with id `user-time` and writes a formatted local datetime like:
  `Oct 18, 2025 19:30:42.123 GMT+01:00`
- The script updates every 250ms and automatically pauses updates when the browser tab is hidden to save CPU.

Customizations
- To show epoch milliseconds instead, replace the formatter in `script.js` with `String(Date.now())` or add a second element that displays it.
- To change update frequency, edit the `interval` constant in `script.js` (e.g., `1000` for 1-second updates).
- To use a different time format (ISO, 12-hour, etc.), update the `formatLocal` function in `script.js`.

Accessibility and performance notes
- The script listens for `visibilitychange` and stops updates when the document is hidden to reduce CPU and battery usage.
- Focus outlines are preserved for keyboard users; prefer high-contrast text if accessibility is a priority for your audience.


