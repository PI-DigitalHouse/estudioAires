const express = require('express');
const { renderizaOrcamento } = require('../controllers/orcamentoController');
const router = express.Router();

/* GET users listing. */
router.get('/', renderizaOrcamento);

module.exports = router;