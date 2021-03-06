/// <reference path="./stream.js"/>

zlib = new function () {
    /// <summary>
    /// This provides bindings to Gzip/Gunzip, Deflate/Inflate, and DeflateRaw/InflateRaw classes. 
    /// Each class takes the same options, and is a readable/writable Stream.
    /// </summary>
    this.createGzip = function (options) {
        /// <summary>Returns a new Gzip object with an options.</summary>
        /// <param name="options" type="Object" optional="true"></param>
        /// <returns type="Zlib.Gzip" />
        return new zlib.Gzip();
    };
    this.createGunzip = function (options) {
        /// <summary>Returns a new Gunzip object with an options.</summary>
        /// <param name="option" type="Sobject"></param>
        /// <returns type="Zlib.Gunzip" />
        return new zlib.Gunzip();
    };
    this.createDeflate = function (options) {
        /// <summary>Returns a new Deflate object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.Deflate" />
        return new zlib.Deflate();
    };
    this.createInflate = function (options) {
        /// <summary>Returns a new Inflate object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.Inflate" />
        return new zlib.Inflate();
    };
    this.createDeflateRaw = function (options) {
        /// <summary>Returns a new DeflateRaw object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.DeflateRaw" />
        return new zlib.DeflateRaw();
    };
    this.createInflateRaw = function (options) {
        /// <summary>Returns a new InflateRaw object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.InflateRaw" />
        return new zlib.InflateRaw();
    };
    this.createUnzip = function (options) {
        /// <summary>Returns a new Unzip object with an options.</summary>
        /// <param name="options" type="Object" optional="true" />
        /// <returns type="Zlib.Unzip" />
        return new zlib.Unzip();
    };
    this.deflate = function (buf, callback) {
        /// <summary>Compress a string with Deflate.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.deflateRaw = function (buf, callback) {
        /// <summary>Compress a string with DeflateRaw.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.gzip = function (buf, callback) {
        /// <summary>Compress a string with Gzip.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.gunzip = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with Gunzip.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.inflate = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with Inflate.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.inflateRaw = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with InflateRaw.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
    this.unzip = function (buf, callback) {
        /// <summary>Decompress a raw Buffer with Unzip.</summary>
        /// <param name="buf" type="Object" />
        /// <param name="callback" value="callback(new Error(),new Object())" optional="true" />
    };
};

zlib.Gzip = function () {
    /// <summary>
    /// Compress data using gzip.
    /// </summary>
};
zlib.Gzip.prototype = new stream();
zlib.Gunzip = function () {
    /// <summary>
    /// Decompress a gzip stream.
    /// </summary>
};
zlib.Gunzip.prototype = new stream();
zlib.Deflate = function () {
    /// <summary>
    /// Compress data using deflate.
    /// </summary>
};
zlib.Deflate.prototype = new stream();
zlib.Inflate = function () {
    /// <summary>
    /// Decompress a deflate stream.
    /// </summary>
};
zlib.Inflate.prototype = new stream();
zlib.DeflateRaw = function () {
    /// <summary>
    /// Compress data using deflate, and do not append a zlib header.
    /// </summary>
};
zlib.DeflateRaw.prototype = new stream();
zlib.InflateRaw = function () {
    /// <summary>
    /// Decompress a raw deflate stream.
    /// </summary>
};
zlib.InflateRaw.prototype = new stream();
zlib.InflateRaw = function () {
    /// <summary>
    /// Decompress a raw deflate stream.
    /// </summary>
};
zlib.InflateRaw.prototype = new stream();
zlib.Unzip = function () {
    /// <summary>
    /// Decompress either a Gzip- or Deflate-compressed stream by auto-detecting the header.
    /// </summary>
};
zlib.Unzip.prototype = new stream();

   