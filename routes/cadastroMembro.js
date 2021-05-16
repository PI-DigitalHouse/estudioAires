var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/membro', function(req, res, next) {
  res.render('cadastroMembro', { title: 'cadastroMembro' });
});

router.post('/membro', function(req, res, next) {
  const dadosDoFormulario = req.body
  console.log(dadosDoFormulario)
  res.send(201);
});

module.exports = router;