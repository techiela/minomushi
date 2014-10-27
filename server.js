// 
// Minomushi: pretty image resizing for smartphone
//

var express = require('express');
var multer  = require('multer');
var app = express();

// enable cookie
app.use(express.cookieParser());
// multipart-form-data parser
app.use(multer({ dest: './uploads/'}));

// rooting
require('./router')({"app": app, "express": express});

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log("Minomushi server listening start.");
});
