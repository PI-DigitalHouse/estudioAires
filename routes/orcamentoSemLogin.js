const express = require('express');
const router = express.Router();


const {renderizaOrcamento, novoOrcamento } = require ('../controllers/orcamentoController')
const checkSession = require('../middlewares/checkSession') 


/* GET users listing. */
router.get('/',  renderizaOrcamento);

module.exports = router; 