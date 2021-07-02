const express = require('express');
const router = express.Router();
const usuarios = require('../usuariosCadastrados.json')
const bcrypt = require('bcrypt')
const fs = require('fs')
const { getHome, recuSenha, getLogin, autenticacao } = require('../controllers/homeController');

router.get('/', getHome)

router.get('/recuperarSenha', recuSenha);

router.get('/login', getLogin);

router.post('/login/autentica', autenticacao);

module.exports = router;