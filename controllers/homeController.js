const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports.getHome = (req, res) => {
    res.render('home', {
        dadosUsuario: req.session.usuario || req.session.membro,
        title: 'home',
        error: null
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

module.exports.listServico1 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('servico1', {
        title: 'Servico 1',
        dadosUsuario: dadosUsuario
    });
}

module.exports.listServico2 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('servico2', {
        title: 'Servico 2',
        dadosUsuario: dadosUsuario
    });
}

module.exports.listServico3 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('servico3', {
        title: 'Servico 3',
        dadosUsuario: dadosUsuario
    });
}

module.exports.listServico4 = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('servico4', {
        title: 'Servico 4',
        dadosUsuario: dadosUsuario
    });
}

module.exports.recuSenha = (req, res) => {
    res.render('DU_recuperacaoSenha', {
        title: 'Recuperar Senha',
        dadosUsuario: req.session.usuario,

    })
}

module.exports.logar = (async(req, res) => {
    const { email, senha } = req.body;
    let foundUser = await models.Usuario.findOne({
        where: {
            email: req.body.email
        }
    });

    if (!foundUser) {

        foundUser = await models.Membro.findOne({
            where: {
                email: req.body.email
            }
        });
    }
    if (!foundUser) {
        res.render('home', {
            error: {
                email: 'Usuário nao cadastrado'
            },
            value: email,
            title: 'home',
            dadosUsuario: null
        })
        console.log('email')
        return
    }
    const hashando = await compareHash(req.body.senha, foundUser.senha)
    console.log(hashando)
    if (!hashando) {
        res.render('home', {
            error: {
                senha: 'Usuário ou senha incorreta'
            },
            title: 'home',
            dadosUsuario: null
        });
        return
    }
    if (foundUser.experiencia) {
        req.session.membro = foundUser;
        res.redirect('/dashboardMembro/minhaAgenda');
        return
    }
    req.session.usuario = foundUser;
    res.redirect('/')
});

module.exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

module.exports.renderizaOrcamentoSLogin = (req, res, next) => {
    res.render('orcamentoSLogin', {
        dadosUsuario: req.session.usuario
    });
}

async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};