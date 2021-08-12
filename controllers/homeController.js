const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');


module.exports.getHome = (req, res) => {
    res.render('home', {
        dadosUsuario: req.session.usuario,
        title: 'home'
    })
}

module.exports.getProjeto1 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('projetos/projeto1', {
        title: 'Projeto1',
        dadosUsuario: dadosUsuario
    })
}

module.exports.getProjeto2 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('projetos/projeto2', {
        title: 'Projeto2',
        dadosUsuario: dadosUsuario
    })
}

module.exports.getProjeto3 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('projetos/projeto3', {
        title: 'Projeto3',
        dadosUsuario: dadosUsuario
    })
}

module.exports.recuSenha = (req, res) => {
    res.render('DU_recuperacaoSenha', {
        title: 'Recuperar Senha',
        dadosUsuario: req.session.usuario,

    })
}

module.exports.logar = (async(req, res) => {
    const { email, senha } = req.body;

    const foundUser = await models.Usuario.findOne({
        where: {
            email: req.body.email
        }
    });
    if (!foundUser) {
        res.render('home', {
            error: {
                email: 'Usuário nao cadastrado'
            },
            value: email
        })
        console.log('email')
        return
    }
    const hashando = await compareHash(req.body.senha, foundUser.senha)
    if (!hashando) {
        res.render('home', {
            error: {
                senha: 'Usuário ou senha incorreta'
            }
        });
        return
    }
    req.session.usuario = foundUser;
    res.redirect('/')
});

async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};

module.exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports.renderizaOrcamentoSLogin = (req, res, next) => {
    res.render('orcamentoSLogin', {
        dadosUsuario: req.session.usuario
    });
}