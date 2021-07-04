const express = require('express');
const { listEntregaveis, listSolicitacoes,recuperaSenha, alteraSenha, meuPerfil, calendario} = require('../controllers/DUController');

const autenticaUsuario = require('../controllers/autenticacaoController');
const router = express.Router();



/* router.get('/autentica', autenticaUsuario); */


//Requer Autenticacao

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