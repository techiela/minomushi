var fs = require('fs');
var rimraf = require('rimraf');

exports.exec = function(req, res) {

  var upload = function() {
    var self = this;
    var uniqId;

    this.getTargetPath = function() {
      var targetPath = "/tmp/" + req.cookies.uniqId + "/";
      console.log("targetPath: " + targetPath);
      return targetPath;
    }

    this.makeWorkDir = function() {
      if (!fs.existsSync(this.getTargetPath())) {
        fs.mkdirSync(this.getTargetPath());
      }
      var dirList = ["upload", "result"];
      dirList.forEach(function(i) {
        var targetPath = self.getTargetPath() + i;
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath);
        }
      });
    }

    this.saveFile = function() {
      console.log(req.files);
      fs.readFile(req.files.file.path, function(err, data) {
        var newPath = self.getTargetPath() + "upload/" + req.files.file.originalname;
        console.log("newPath: " + newPath);
        fs.writeFile(newPath, data, function(err) {
          console.log("Finished writing file..." + err);
        });
      });
    }

    this.run = function() {
      this.makeWorkDir();
      this.saveFile();

      res.send({
        result: "ok",
        message: "The images saved successfully!"
      });
    }
  }

  new upload().run();
}
