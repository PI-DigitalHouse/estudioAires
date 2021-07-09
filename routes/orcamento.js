const express = require('express');
const router = express.Router();


const {renderizaOrcamento, novoOrcamento } = require ('../controllers/orcamentoController')
const checkSession = require('../middlewares/checkSession') 


/* GET users listing. */
router.get('/', renderizaOrcamento);

//ajax ou fetin 
router.post('/novoOrcamento', novoOrcamento);



module.exports = router;