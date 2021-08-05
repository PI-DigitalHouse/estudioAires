const express = require('express');
const models = require('../models');
const session = require('express-session');
const router = express.Router();
const bcrypt = require('bcrypt')
const { getHome, recuSenha, getLogin, logar, logOut, getProjeto1, getProjeto2, getProjeto3 } = require('../controllers/homeController');
const logarMembro = require('../controllers/autenticacaoMembro')
const checkSession = require('../middlewares/checkSession')


router.get('/', getHome)

router.get('/', checkSession, getHome)

router.get('/projetos/projeto1', getProjeto1)

router.get('/projetos/projeto2', getProjeto2)

router.get('/projetos/projeto3', getProjeto3)

router.get('/recuperarSenha', recuSenha);

router.get('/login', getLogin);


router.post('/login', logar);


router.get('/logout', logOut);




module.exports = router;