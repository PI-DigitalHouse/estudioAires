var express = require('express');
const { listEntregaveis, listSolicitacoes,recuperaSenha, alteraSenha } = require('../controllers/DUController');
var router = express.Router();

/* GET entregáveis */
router.get('/entregaveis/:idServico', listEntregaveis);

/* GET solicitações */
router.get('/solicitacoes/:idUsuario',listSolicitacoes );
  
// recuperacao de senha
router.get('/recuperacaoSenha', recuperaSenha);

// alteração da senha
router.get('/alteraSenha', alteraSenha)

module.exports = router;