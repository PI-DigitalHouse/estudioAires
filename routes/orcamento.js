const express = require('express');
const router = express.Router();


const {renderizaOrcamento, novoOrcamento } = require ('../controllers/orcamentoController')



/* GET users listing. */
router.get('/', renderizaOrcamento);

//ajax ou fetin 
router.post('/novoOrcamento', novoOrcamento);



module.exports = router;