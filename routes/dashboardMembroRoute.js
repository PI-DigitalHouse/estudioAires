const models = require('../models');
const express = require('express');
const router = express.Router();
const fs = require('fs')
const { calendario, bloquear, aprovacoes, mostraJobs, buscaJob, minhaAgenda, mostraAlteraDados, alteraDados } = require('../controllers/DMController');
const { loginMembro, logarMembro } = require('../controllers/autenticacaoMembro')
const checkSessionMembro = require('../middlewares/checkMembro')
const session = require('express-session');
const { Router } = require('express');

router.get('/login-membro', loginMembro)

router.post('/login-membro', logarMembro)

router.get('/', logarMembro)

router.get('/aprovacoes', checkSessionMembro, aprovacoes);

//Visualização calendario
router.get('/calendario', checkSessionMembro, calendario)

//Bloqueio de calendario
router.post('/calendario', checkSessionMembro, bloquear)

router.get('/jobsFinalizados', checkSessionMembro, mostraJobs)

router.get('/minhaAgenda', checkSessionMembro, minhaAgenda)

router.get('/alterarDados',checkSessionMembro, mostraAlteraDados)

router.post('/alterarDados',checkSessionMembro, alteraDados)

//Busca jobs por ID
router.get('/buscar', checkSessionMembro, buscaJob)

module.exports = router;