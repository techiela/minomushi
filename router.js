var path = require('path');

var controller = {};
controller.fileUpload = require("./controller/fileUpload");

module.exports = function(o) {

  // client以下のファイルを静的ファイルとして扱う
  o.app.use(o.express.static(path.resolve(__dirname, 'client')));

  o.app.post('/fileUpload', controller.fileUpload.save);
}