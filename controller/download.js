var fs = require('fs');
var async = require("async");
var glob = require("glob");
var path = require("path");
var archiver = require("archiver");
var mime = require("mime");
var gm = require('gm').subClass({
  imageMagick: true
});
var strategy;

exports.exec = function(req, res) {

  var download = function() {
    var self = this;
    var workDir = "/tmp/" + req.cookies.uniqId + "/";

    this.getStrategy = function() {
      if (req.params.target === "android") {
        strategy = require("../model/android");
      }
      else {
        strategy = require("../model/iphone");
      }
      strategy = strategy.create({
        req: req
      });
    }

    this.convert = function() {
      glob(workDir + "upload/*.*", function(err, files) {
        async.forEachSeries(files, function(item, callback) {
          console.log("item: " + item);
          strategy.convert(item, callback);
        }, function(err) {
          console.log("finish all.");
          self.archive();
        });
      });
    }

    this.archive = function() {
      var output = fs.createWriteStream(workDir + "result/result.zip");
      var archive = archiver('zip');

      output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        self.put();
      });

      archive.on('error', function(err) {
        throw err;
      });

console.log("resizeDir: " + strategy.getResizeDir());
      archive.pipe(output);
      archive.bulk([{
        expand: true,
        cwd: strategy.getResizeDir(),
        src: ["**"],
        dest: ""
      }]);
      archive.finalize();
    }

    this.put = function() {
      console.log("put")
      res.download(workDir + "result/result.zip");
    }

    this.run = function() {
      // this.clean();
      this.getStrategy();
      strategy.makeWorkDir();
      this.convert();
    }
  }

  new download().run();
}
