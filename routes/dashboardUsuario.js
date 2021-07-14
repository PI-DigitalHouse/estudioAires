const express = require('express');
const { listEntregaveis, listSolicitacoes, recuperaSenha, alteraSenha, meuPerfil, calendario, showAlteraDados, alteraDados } = require('../controllers/DUController');
const session = require('express-session');

const router = express.Router();
const checkSession = require('../middlewares/checkSession')

// Entregáveis
router.get('/entregaveis/:idServico', checkSession, listEntregaveis);

// Solicitações
router.get('/solicitacoes/:idUsuario', checkSession, listSolicitacoes);

// Recuperação de Senha
router.get('/recuperacaoSenha', recuperaSenha);

// Alteração da Senha
router.get('/alteraSenha', checkSession, alteraSenha)

// Meu Perfil
router.get('/meuPerfil', checkSession, meuPerfil)

//alterar dados
router.get('/alteraDados', checkSession, showAlteraDados)

router.post('/alterandoDados', alteraDados)

module.exports = router;