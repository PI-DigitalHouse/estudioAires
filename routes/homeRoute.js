const express = require('express');
const models = require('../models');
const session = require('express-session');
const router = express.Router();
const bcrypt = require('bcrypt')
const { getHome, recuSenha, logOut, getProjeto1, getProjeto2, getProjeto3, logar, listServico1, listServico2, listServico3, listServico4, landing, conteudo } = require('../controllers/homeController');
const logarMembro = require('../controllers/autenticacaoMembro')
const checkSession = require('../middlewares/checkSession')

router.get('/', getHome)

router.get('/', checkSession, getHome)

/* GET serviço 1 */
router.get('/servico1', listServico1);

/* GET serviço 2 */
router.get('/servico2', listServico2);

/* GET serviço 3 */
router.get('/servico3', listServico3);

/* GET serviço 4 */
router.get('/servico4', listServico4);

/* GET projeto 1 */
router.get('/projetos/projeto1', getProjeto1)

/* GET projeto 2 */
router.get('/projetos/projeto2', getProjeto2)

/* GET projeto 3 */
router.get('/projetos/projeto3', getProjeto3)

/* GET para recuperação de senha */
router.get('/recuperarSenha', recuSenha);

/* POST do login */
router.post('/login', logar);

/* GET Log-out */
router.get('/logout', logOut);

router.get('/landing', landing)

router.get('/conteudo', conteudo)

module.exports = router;