const express = require('express');
const models = require('../models');
const session = require('express-session');
const router = express.Router();
const bcrypt = require('bcrypt')
const { loginAdmin, logarAdmin, getDashAdmin, showCadastroMembro, postMembro} = require('../controllers/adminController');
const checkSessionAdmin = require('../middlewares/checkAdmin') 


router.get('/', loginAdmin)

router.post('/logarAdmin', logarAdmin);
router.post('/novoMembro', postMembro);

router.get('/dashboardAdmin',checkSessionAdmin, getDashAdmin)

router.get('/cadastroMembro',checkSessionAdmin, showCadastroMembro)


module.exports = router; 