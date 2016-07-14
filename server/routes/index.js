var express = require('express');
var router = express.Router();

router.get('/testing', function(req, res) {
	res.send("<h1>testing is neato</h1>");
})

module.exports = router;