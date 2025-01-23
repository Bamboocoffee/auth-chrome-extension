chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed. Checking rules...");

  chrome.declarativeNetRequest.getDynamicRules((rules) => {
    console.log("Dynamic Rules Loaded:", rules);
  });

  chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    console.log("Rule matched:", info);
  });
});
