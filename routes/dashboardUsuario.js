const express = require('express');
const { listEntregaveis, listSolicitacoes,recuperaSenha, alteraSenha, meuPerfil, calendario} = require('../controllers/DUController');
const session = require('express-session');

const router = express.Router();
const checkSession = require('../middlewares/checkSession') 






//Requer Autenticacao

// Entregáveis
router.get('/entregaveis/:idServico', checkSession, listEntregaveis);

// Solicitações
router.get('/solicitacoes/:idUsuario', checkSession, listSolicitacoes );
  
// Recuperação de Senha
router.get('/recuperacaoSenha', recuperaSenha);

// Alteração da Senha
router.get('/alteraSenha',checkSession, alteraSenha)

// Meu Perfil
router.get('/meuPerfil', checkSession, meuPerfil)

module.exports = router;