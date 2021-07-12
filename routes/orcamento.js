const express = require('express');
const router = express.Router();


const {renderizaOrcamento, novoOrcamento, renderizaOrcamentoSLogin } = require ('../controllers/orcamentoController')

const checkSession = require('../middlewares/checkSession') 


/* GET users listing. */
router.get('/', checkSession, renderizaOrcamento);
router.get('/novo', renderizaOrcamentoSLogin);

//ajax ou fetin 

router.post('/novoOrcamento', renderizaOrcamento);



module.exports = router;