const express = require('express');
const router = express.Router();
const { renderizaOrcamento, novoOrcamento, renderizaOrcamentoSLogin, verificaDisponibilidade } = require('../controllers/orcamentoController')
const checkSession = require('../middlewares/checkSession')

/* GET users listing. */
router.get('/', checkSession, renderizaOrcamento);

router.get('/novo', renderizaOrcamento);

router.post('/novoOrcamento', novoOrcamento);

router.get('/orcamentoSLogin', renderizaOrcamento);

router.get('/horariosPorDia', verificaDisponibilidade)

module.exports = router;