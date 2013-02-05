var fs = require('fs');
var handlebars = require('../handlebars');

exports.init = function(root, config) {

  if (!(config && typeof(config) === 'object')) config = {};

  return {

    name: 'Handlebars',

    extensions: ['hbs', 'handlebars'],

    assetType: 'html',

    contentType: 'text/html',

    compile: function(path, options, context, cb) {
    	
    	if (typeof context === "function")
    	{	
    		cb = context;
    		context = {};
    	}
    	
    	

      // Merge any locals passed to config.locals
      if (config.context && typeof(config.context) === 'object')
        for (var attrname in config.context) { context[attrname] = config.context[attrname]; }

      // If passing optional headers for main view HTML
      if (options && options.headers) context['SocketStream'] = options.headers;
	
      var input = fs.readFileSync(path, 'utf8');
      var parser = handlebars.compile(input);
      var output = parser(context);

      cb(output);
    }
  };
};