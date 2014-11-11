var fs = require('fs');
var rimraf = require('rimraf');
var async = require('async');
var util = require('util');

var cleanDir = ['upload', 'iphone', 'android'];

exports.exec = function(req, res) {

  var clear = function() {
    var self = this;
    var workDir = util.format("/tmp/%s/", req.cookies.uniqId);

    this.wipe = function() {
      async.forEachSeries(cleanDir, function(item, callback) {
        console.log("targetDir: " + workDir + item);
        if (fs.existsSync(workDir + item)) {
          rimraf.sync(workDir + item);
        }
        callback();
      }, function(err) {
        console.log("finish all.");
        self.put();
      });
    }

    this.put = function() {
      res.send({
        result: "ok",
        message: "The images were deleted successfully!"
      });
    }

    this.run = function() {
      this.wipe();
    }
  }

  new clear().run();
}
