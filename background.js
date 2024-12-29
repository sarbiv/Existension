// Set up daily alarm
chrome.runtime.onInstalled.addListener(() => {
  // Create an alarm that fires daily
  chrome.alarms.create('dailyQuote', {
    periodInMinutes: 24 * 60 // 24 hours
  });
});

// Listen for alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'dailyQuote') {
    // Show notification
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'Daily Philosophical Wisdom',
      message: 'Your daily dose of philosophical insight awaits!',
      priority: 2
    });
  }
});

// Example analytics setup
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    logInstallation();
  }
});

chrome.runtime.onStartup.addListener(function() {
  logDailyActive();
}); 