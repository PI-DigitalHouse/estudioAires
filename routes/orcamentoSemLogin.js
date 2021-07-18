const express = require('express');
const router = express.Router();


/*pode apagar const {renderizaOrcamento, novoOrcamento } = require ('../controllers/orcamentoController')
const checkSession = require('../middlewares/checkSession') 
const renderizaOrcamentoSLogin = require ('../controllers/orcamentoSemLoginController')
  */


 //GET users listing. 
router.get('/orcamentoSLogin', renderizaOrcamentoSLogin);

module.exports = router;  