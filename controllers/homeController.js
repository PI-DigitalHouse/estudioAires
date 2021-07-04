const fs = require('fs')
const bcrypt = require('bcrypt')

module.exports.getHome = (req, res) => {
    res.render('home');
}

module.exports.recuSenha = (req, res) => {
    res.render('DU_recuperacaoSenha')
}

module.exports.getLogin = (req, res) => {
    res.render('login')
}

module.exports.autenticacao = (req, res) => {

    for (var i = 0; i < usuarios.length; i++) {
        bcrypt.compare(usuarios[i].senha, req.body.senha)
        if (req.body.email === usuarios[i].email && req.body.senha === usuarios[i].senha) {
            res.render('/dashboardMeuPerfil')
        }
    }
    res.send('Usuário ou senha inválidos')
}

