const express = require('express');
const models = require('../models');
const session = require('express-session');
const router = express.Router();
const bcrypt = require('bcrypt')
const { getHome, recuSenha, getLogin, logar} = require('../controllers/homeController');
const checkSession = require('../middlewares/checkSession') 

router.get('/', getHome )

router.get('/recuperarSenha', recuSenha);

router.get('/login', getLogin);
 
router.post('/login', logar);

module.exports = router;