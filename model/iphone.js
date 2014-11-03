var fs = require('fs');
var async = require("async");
var glob = require("glob");
var path = require("path");
var archiver = require("archiver");
var mime = require("mime");
var gm = require('gm').subClass({
  imageMagick: true
});
var mkdirp = require('mkdirp');
var util = require("util");

var RATE_FOR_2X = 0.667;
var RATE_FOR_1X = 0.334;

console.log("require success.");
exports.create = function(args) {

  var strategy = function(args) {

    var self = this;
    var req = args.req;
    var resizeDir = util.format("/tmp/%s/%s/resize/", 
      req.cookies.uniqId, path.basename(__filename).replace(/\.js/, ""));

    this.makeWorkDir = function() {
      if (!fs.existsSync(resizeDir)) {
        mkdirp.sync(resizeDir);
      }
    }

    this.convert = function(item, forEachSeriesCallback) {
      gm(item).size(function(err, size) {
        console.log("width: " + size.width);
        console.log("height: " + size.height);
        fs.createReadStream(item).pipe(fs.createWriteStream(resizeDir + self.getResizeFilename(item, "")));
        console.log("save 3x");
        gm(item).resize(size.width * RATE_FOR_2X, size.height * RATE_FOR_2X)
          .write(resizeDir + self.getResizeFilename(item, RATE_FOR_2X), function() {
            console.log("save 2x");
            gm(item).resize(size.width * RATE_FOR_1X, size.height * RATE_FOR_1X)
              .write(resizeDir + self.getResizeFilename(item, RATE_FOR_1X), function() {
                console.log("save 1x");
                forEachSeriesCallback();
              });
          });
      });

      this.getResizeFilename = function(filename, rate) {
        // remove @x
        filename = path.basename(filename).replace(/@\dx/, "");
        if (rate === RATE_FOR_1X) {
          return filename;
        }
        else if (rate === RATE_FOR_2X) {
          return filename.replace(/(\.\w+$)/i, "@2x$1");
        }
        return filename.replace(/(\.\w+$)/i, "@3x$1");
      }
    }

    this.getResizeDir = function() {
      return resizeDir;
    }
  }
  return new strategy(args);
}
