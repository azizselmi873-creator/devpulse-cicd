// DevPulse — app.js
// Displays build info injected by the CI/CD pipeline

window.addEventListener('DOMContentLoaded', () => {
  const buildInfo = document.getElementById('build-info');

  // Check if env.js was injected by the CD pipeline
  if (window.ENV && window.ENV.BUILD_NUMBER) {
    buildInfo.textContent = `build #${window.ENV.BUILD_NUMBER} (${window.ENV.COMMIT_SHA})`;
  } else {
    buildInfo.textContent = 'local dev';
  }
});