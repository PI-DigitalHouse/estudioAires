var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/membro', function(req, res, next) {
  res.render('cadastroMembro', { title: 'cadastroMembro' });
});

router.post('/membro', function(req, res, next) {
  console.log(req.body)
  res.send(201);
});

module.exports = router;