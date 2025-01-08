// Set up daily alarm
chrome.runtime.onInstalled.addListener(() => {
  // Create an alarm that fires daily
  chrome.alarms.create('dailyQuote', {
    periodInMinutes: 1440, // 24 hours
    when: getNextNotificationTime()
  });
});

// Listen for alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'dailyQuote') {
    showQuoteNotification();
  }
});

// Get next notification time (e.g., 9:00 AM)
function getNextNotificationTime() {
  const now = new Date();
  const next = new Date(now);
  next.setHours(9, 0, 0, 0); // Set to 9:00 AM
  
  if (next <= now) {
    next.setDate(next.getDate() + 1); // If 9 AM passed, set for tomorrow
  }
  
  return next.getTime();
}

// Show the notification
function showQuoteNotification() {
  const today = new Date();
  const dateKey = today.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit'
  }).replace('/', '-');
  
  const todayQuote = quotes[dateKey];
  
  if (todayQuote) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'Daily Philosophical Wisdom',
      message: `"${todayQuote.quote}"\n— ${todayQuote.philosopher}`,
      priority: 2
    });
  }
}

// Example analytics setup
chrome.runtime.onInstalled.addListener(function(details) {
  if (details.reason === "install") {
    logInstallation();
  }
});

chrome.runtime.onStartup.addListener(function() {
  logDailyActive();
}); 