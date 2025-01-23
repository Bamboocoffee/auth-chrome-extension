## Chrome Extension

This is a chrome extension that serves as tool to inject a autheorization header into specified URLs. To customise for your setup do the following:

1. Edit manifest.json -> host_permissions to include both the source and target domainn of the API call.
2. Edit rules.js -> requestHeaders to include the header you'd like to pass and the associated value
3. Load the extension into your browser. Visit chrome://extensions/

Happy building 👷
