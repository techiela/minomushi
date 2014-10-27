var fs = require('fs');
var rimraf = require('rimraf');

exports.save = function(req, res) {
  
  var fileUpload = function() {
    var self = this;
    var uniqId;
    
    this.clean = function() {
      rimraf.sync(this.getTargetPath(), function() {
        console.log("clean tmp dir: " + this.getTargetPath());
      });
    }
    
    this.saveFile = function() {
      console.log(req.files);
      fs.readFile(req.files.file.path, function(err, data) {
        var newPath = self.getTargetPath() + req.files.file.originalname;
        console.log("newPath: " + newPath);
        fs.writeFile(newPath, data, function (err) {
          console.log("Finished writing file..." + err);
        });
      });
    }
    
    this.getTargetPath = function () {
      // TODO set a value from cookie
      // var targetPath = "/tmp/" + req.cookies.uniqId + "/";
      var targetPath = "/tmp/20141027/";
      console.log("targetPath: " + targetPath);
      return targetPath;
    }
    
    this.makeUniqDir = function() {
      if (fs.existsSync(this.getTargetPath())) {
        return;
      }
      fs.mkdirSync(this.getTargetPath());
    }
    
    this.run = function() {
      // this.clean();
      this.makeUniqDir();
      this.saveFile();
      
      res.send({result: "ok",
        message: "file saved successfully!"});
    }
  }
  
  new fileUpload().run();
}

