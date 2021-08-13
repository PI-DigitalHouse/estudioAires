const express = require('express');
const router = express.Router();

//GET users listing. 
router.get('/orcamentoSLogin', renderizaOrcamentoSLogin);

module.exports = router;