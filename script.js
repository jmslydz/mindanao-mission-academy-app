if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {
      // Non-fatal — site still works without offline caching.
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.download-btn');
  const url = APP_CONFIG.playStoreUrl;

  buttons.forEach((btn) => {
    if (!url) {
      // App not published yet — every download button becomes a
      // disabled placeholder. Nothing else in the page needs to change
      // once the app goes live: only APP_CONFIG.playStoreUrl gets set.
      btn.classList.add('is-disabled');
      btn.setAttribute('aria-disabled', 'true');
      btn.setAttribute('title', 'Coming soon on Google Play');
    } else {
      btn.addEventListener('click', () => {
        window.open(url, '_blank', 'noopener');
      });
    }
  });
});
