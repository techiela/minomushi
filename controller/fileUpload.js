var fs = require('fs');

exports.save = function(req, res) {
  res.send('file saved successfully!');
  
  var fileUpload = function() {
    var self = this;
    var uniqId;
    
    this.saveFile = function() {
      console.log(req.files);
      fs.readFile(req.files.file.path, function(err, data) {
        var newPath = self.getTargetPath() + req.files.file.originalName;
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
      this.makeUniqDir();
      this.saveFile();
    }
  }
  
  new fileUpload().run();
}

