const models = require('../models');
const express = require('express');
const router = express.Router();
const fs = require('fs')
const { calendario, bloquear, aprovacoes, mostraJobs, buscaJob } = require('../controllers/DMController');
const { loginMembro, logarMembro } = require('../controllers/autenticacaoMembro')
const checkSessionMembro = require('../middlewares/checkMembro')
const session = require('express-session');
const { Router } = require('express');

router.get('/login-membro', loginMembro)

router.post('/login-membro', logarMembro)

router.get('/meuPerfil', checkSessionMembro, function(req, res, next) {
    res.render('dashboardMembroMeuPerfil', {
        title: 'Minha Agenda',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro
    });
})

router.get('/aprovacoes', checkSessionMembro, aprovacoes);

router.get('/jobsFinalizados', checkSessionMembro, mostraJobs)

router.get('/alterarDados', function(req, res, next) {

    res.render('alterarDados', {
        usuario: {
            nome: req.session.nome,
            dadosUsuario: req.session.usuario,
            dadosMembro: req.session.membro
        }
    })

})

//Visualização calendario
router.get('/calendario', checkSessionMembro, calendario)

//Bloqueio de calendario
router.post('/calendario', checkSessionMembro, bloquear)

//Busca jobs por ID
router.get('/buscar', checkSessionMembro, buscaJob)

module.exports = router;