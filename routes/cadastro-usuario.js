const express = require('express');
const router = express.Router();

/* GET cadastroUsuario */
 //localhost:3000/cadastro-usuario
router.get('/', function(req, res, next) {

res.render('cadastro-usuario');
});
module.exports = router;