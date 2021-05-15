const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { //acesso no localhost3000/novo
    res.render('orcamentoSemLogin');
  });

module.exports = router;