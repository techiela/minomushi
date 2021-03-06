var path = require('path');

var controller = {};
controller.upload = require("./controller/upload");
controller.download = require("./controller/download");
controller.clear = require("./controller/clear");

module.exports = function(o) {

  // client以下のファイルを静的ファイルとして扱う
  o.app.use(o.express.static(path.resolve(__dirname, 'client')));

  o.app.post('/upload', controller.upload.exec);
  o.app.get('/download/:target', controller.download.exec);
  o.app.post('/clear', controller.clear.exec);
}