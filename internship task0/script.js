// script.js - update the #user-time element with a local human-readable datetime

(function () {
  'use strict';

  const el = document.getElementById('user-time');
  if (!el) return; // nothing to do if element is missing

  // Format local human-readable time with milliseconds and timezone
  // Example: "Oct 18, 2025 19:30:42.123 GMT+01:00"
  function formatLocal(ms) {
    const d = new Date(ms);
    // date part: e.g., Oct 18, 2025
    const datePart = d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    // time part with seconds: HH:MM:SS
    const timePart = d.toLocaleTimeString(undefined, { hour12: false });
    const msPart = String(d.getMilliseconds()).padStart(3, '0');
    // timezone offset formatted as GMT±HH:MM
    const tzOffset = -d.getTimezoneOffset(); // in minutes
    const sign = tzOffset >= 0 ? '+' : '-';
    const absMinutes = Math.abs(tzOffset);
    const tzHours = String(Math.floor(absMinutes / 60)).padStart(2, '0');
    const tzMinutes = String(absMinutes % 60).padStart(2, '0');
    const tz = `GMT${sign}${tzHours}:${tzMinutes}`;
    return `${datePart} ${timePart}.${msPart} ${tz}`;
  }

  // Update function: writes the local formatted time
  function update() {
    const now = Date.now();
    el.textContent = formatLocal(now);
  }

  // Start with a first update
  update();

  // Update every quarter second to keep it responsive but light-weight
  const interval = 250;
  let timerId = setInterval(update, interval);

  // Pause updates when page is hidden (saves CPU on background tabs)
  function handleVisibility() {
    if (document.hidden) {
      if (timerId) { clearInterval(timerId); timerId = null; }
    } else {
      if (!timerId) {
        update();
        timerId = setInterval(update, interval);
      }
    }
  }

  document.addEventListener('visibilitychange', handleVisibility, {passive:true});

  // Cleanup on unload (good practice)
  window.addEventListener('beforeunload', function () {
    if (timerId) clearInterval(timerId);
  });
})();
