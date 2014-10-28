var fs = require('fs');
var async = require("async");
var glob = require("glob");
var path = require("path");
var archiver = require("archiver");
var mime = require("mime");
var gm = require('gm').subClass({
  imageMagick: true
});

exports.exec = function(req, res) {

  var download = function() {
    var self = this;
    var uniqId;

    this.getTargetPath = function() {
      // TODO set a value from cookie
      // var targetPath = "/tmp/" + req.cookies.uniqId + "/";
      var targetPath = "/tmp/20141028/";
      return targetPath;
    }

    this.makeUniqDir = function() {
      var dirList = ["xhdpi", "hdpi", "mdpi"];
      dirList.forEach(function(i) {
        var targetPath = self.getTargetPath() + "resize/" + i;
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath);
        }
      });
    }

    this.convert = function() {
      glob(self.getTargetPath() + "upload/*.*", function(err, files) {
        async.forEachSeries(files, function(item, callback) {
          console.log("item: " + item);
          gm(item).size(function(err, value) {
            console.log("width: " + value.width);
            console.log("height: " + value.height);
            fs.createReadStream(item).pipe(fs.createWriteStream(self.getTargetPath() + "resize/xhdpi/" + path.basename(item)));
            gm(item).resize(value.width / 1.33, value.height / 1.33)
              .write(self.getTargetPath() + "resize/hdpi/" + path.basename(item), function() {
                console.log("save hdpi")
                gm(item).resize(value.width / 2, value.height / 2)
                  .write(self.getTargetPath() + "resize/mdpi/" + path.basename(item), function() {
                    console.log("save mdpi")
                    callback();
                  });
              });
          });
        }, function(err) {
          console.log("finish all.");
          self.archive();
        });
      });
    }

    this.archive = function() {
      var output = fs.createWriteStream(self.getTargetPath() + "result/result.zip");
      var archive = archiver('zip');

      output.on('close', function() {
        console.log(archive.pointer() + ' total bytes');
        console.log('archiver has been finalized and the output file descriptor has closed.');
        self.put();
      });

      archive.on('error', function(err) {
        throw err;
      });

      archive.pipe(output);
      archive.bulk([{
        expand: true,
        cwd: self.getTargetPath() + "resize/",
        src: ["**"],
        dest: ""
      }]);
      archive.finalize();
    }

    this.put = function() {
      console.log("put")
      res.download(self.getTargetPath() + "result/result.zip");
    }

    this.run = function() {
      // this.clean();
      this.makeUniqDir();
      this.convert();
    }
  }

  new download().run();
}
