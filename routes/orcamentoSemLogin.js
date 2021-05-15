const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/novo', function(req, res, next) {
    res.render('orcamentoSemLogin');
  });

module.exports = router;