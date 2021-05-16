var express = require('express');
const { listEntregaveis, listSolicitacoes,recuperaSenha } = require('../controllers/DUController');
var router = express.Router();

/* GET entregáveis */
router.get('/entregaveis/:idServico', listEntregaveis);

/* GET solicitações */
router.get('/solicitacoes/:idUsuario',listSolicitacoes );
  
// recuperacao de senha
router.get('/recuperacaoSenha', recuperaSenha);

module.exports = router;