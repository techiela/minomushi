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

var RESOLUTION_LIST = ["xxhdpi", "xhdpi", "hdpi"];
var RATE_FOR_XHDPI = 0.667;
var RATE_FOR_HDPI = 0.5;

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
      RESOLUTION_LIST.forEach(function(i) {
        var targetPath = resizeDir + i;
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath);
        }
      });
    }

    this.convert = function(item, forEachSeriesCallback) {
      gm(item).size(function(err, size) {
        console.log("width: " + size.width);
        console.log("height: " + size.height);
        fs.createReadStream(item).pipe(fs.createWriteStream(resizeDir + "xxhdpi/" + path.basename(item)));
        console.log("save xxhdpi");
        gm(item).resize(size.width * RATE_FOR_XHDPI, size.height * RATE_FOR_XHDPI)
          .write(resizeDir + "xhdpi/" + path.basename(item), function() {
            console.log("save xhdpi");
            gm(item).resize(size.width * RATE_FOR_HDPI, size.height * RATE_FOR_HDPI)
              .write(resizeDir + "hdpi/" + path.basename(item), function() {
                console.log("save hdpi");
                forEachSeriesCallback();
              });
          });
      });
    }

    this.getResizeDir = function() {
      return resizeDir;
    }
  }
  return new strategy(args);
}
