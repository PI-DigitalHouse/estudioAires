const express = require('express');
const models = require('../models');
const router = express.Router();
const bcrypt = require('bcrypt')

const { getHome, recuSenha, getLogin, autenticacao } = require('../controllers/homeController');



   
router.get('/', getHome)

router.get('/recuperarSenha', recuSenha);

router.get('/login', getLogin);
/* 
router.post('/login', autenticacao);
 */
module.exports = router;