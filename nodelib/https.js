/// <reference path="tls.js" />
/// <reference path="http.js" />

https = new function () {
    /// <summary>HTTPS is the HTTP protocol over TLS/SSL. In Node this is implemented as a separate module.</summary>
    this.createServer = function (options, requestListener) {
        /// <summary>
        /// Returns a new HTTPS web server object. 
        /// The options is similar to tls.createServer(). 
        /// The requestListener is a function which is automatically added to the 'request' event.
        /// </summary>
        /// <param name='options' type='Object' />
        /// <param name='requestListener' value='requestListener(new HTTP.ServerRequest(),new HTTP.ServerResponse())' optional='true' />
        /// <returns type='HTTPS.Server' />
    	return new https.Server();
    };
    this.request = function (options, callback) {
        /// <summary>
        /// Makes a request to a secure web server.
        /// </summary>
        /// <param name='options' type='Object' />
        /// <param name='callback' value='callback(new HTTP.ClientRequest())' optional='true'/>
        /// <returns type='HTTP.ClientRequest' />
    	return new http.ClientRequest();
    };
    this.get = function (options, callback) {
        /// <summary>Like http.get() but for HTTPS.</summary>
        /// <param name='options' type='Object' />
        /// <param name='callback' value='callback(new HTTP.ClientRequest())' optional='true'/>
        /// <returns type='HTTP.ClientRequest' />
    	return new http.ClientRequest();
    };
    this.globalAgent = new https.Agent();
};

https.Server = function() {
    /// <summary>This class is a subclass of tls.Server and emits events same as http.Server.</summary>
};
https.Server.prototype = new TLS.Server();

https.Agent = function() {
	/// <summary>
    /// An Agent object for HTTPS similar to http.Agent. See https.request() for more information.
	/// </summary>

};

https.Agent.prototype = new http.Agent();

   