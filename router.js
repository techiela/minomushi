var path = require('path');

var controller = {};
controller.upload = require("./controller/upload");

module.exports = function(o) {

  // client以下のファイルを静的ファイルとして扱う
  o.app.use(o.express.static(path.resolve(__dirname, 'client')));

  o.app.post('/upload', controller.upload.save);
}