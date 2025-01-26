// Create web server
var express = require('express');
var app = express();
app.listen(3000);

// Create router
var router = express.Router();
router.get('/comments', function(req, res) {
  res.send('Comments');
});

// Register router
app.use(router);