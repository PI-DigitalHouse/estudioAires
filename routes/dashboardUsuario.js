var express = require('express');
const { listEntregaveis, listSolicitacoes } = require('../controllers/DUController');
var router = express.Router();

/* GET entregáveis */
router.get('/entregaveis/:idServico', listEntregaveis);

/* GET solicitações */
router.get('/solicitacoes/:idUsuario',listSolicitacoes );
  

module.exports = router;