const express = require('express');
const router = express.Router();
const { renderizaOrcamento, novoOrcamento, renderizaOrcamentoSLogin, verificaDisponibilidade, deletarOrcamento, finalizarJob } = require('../controllers/orcamentoController')
const checkSession = require('../middlewares/checkSession')

/* GET users listing. */
router.get('/', checkSession, renderizaOrcamento);

router.get('/novo', renderizaOrcamento);

router.post('/novoOrcamento', novoOrcamento);

router.get('/orcamentoSLogin', renderizaOrcamento);

router.get('/horariosPorDia', verificaDisponibilidade)

router.get('/deletar', deletarOrcamento);

router.get('/finalizaJob', finalizarJob);

module.exports = router;