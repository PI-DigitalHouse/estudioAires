var express = require('express');
const { listEntregaveis, listSolicitacoes,recuperaSenha, alteraSenha, meuPerfil} = require('../controllers/DUController');
var router = express.Router();

// Entregáveis
router.get('/entregaveis/:idServico', listEntregaveis);

// Solicitações
router.get('/solicitacoes/:idUsuario',listSolicitacoes );
  
// Recuperação de Senha
router.get('/recuperacaoSenha', recuperaSenha);

// Alteração da Senha
router.get('/alteraSenha', alteraSenha)

// Meu Perfil
router.get('/meuPerfil', meuPerfil)

module.exports = router;