# Handlebars Template Server Engine wrapper for SocketStream 0.3

http://handlebarsjs.com/

Use pre-compiled Handlebars server-side templates in your app.

### Installation
Add ss-handlebars-formatter to your application's package.json file and then add this line to app.js:

```javascript
ss.client.formatters.add require 'ss-handlebars-formatter'  - for coffee-script.
ss.client.formatters.add(require('ss-handlebars-formatter')); - for javascript.
```

### Git
https://github.com/AVVSDevelopment/ss-handlebars-formatter