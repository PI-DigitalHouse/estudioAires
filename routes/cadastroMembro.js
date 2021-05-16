var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/membro', function(req, res, next) {
  res.render('cadastroMembro', { title: 'cadastroMembro' });
});

module.exports = router;