const express = require('express');
const router = express.Router();
const usuarios = require('../usuariosCadastrados.json')
const bcrypt = require('bcrypt')

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/recuperarSenha', (req, res) => {
    res.render('DU_recuperacaoSenha')
})

router.get('/login', function(req, res) {
    res.render('login')
})

router.post('/login/autentica', function(req, res) {

    for (var i = 0; i < usuarios.length; i++) {

        bcrypt.compare(usuarios[i].senha, req.body.senha)
        if (req.body.email === usuarios[i].email && req.body.senha === usuarios[i].senha) {
            res.render('/dashboardMeuPerfil')
        }
    }
    res.send('Usuário ou senha inválidos')
})

module.exports = router;