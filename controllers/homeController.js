const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');


module.exports.getHome = (req, res) => {
    res.render('home', {
        dadosUsuario: req.session.usuario
    })
}

module.exports.recuSenha = (req, res) => {
    res.render('DU_recuperacaoSenha')
}

module.exports.getLogin = (req, res) => {
    res.render('login',{
        error: {
            email:'',
            dadosUsuario: req.session.usuario
        }
    })
}

module.exports.logar = (async (req, res) => {
    const { email, senha } = req.body;

    const foundUser = await models.Usuario.findOne({
        where: {
            email: req.body.email,
           
        }
    });

   
    if (!foundUser) {
        res.render('login', {
            error: {
                email: 'cadastro nao encontrado'
            },
            value: email
        }) 
        console.log('email')
        return//colocar error no ejs login 
    }
    const hashando = await compareHash(req.body.senha, foundUser.senha)
    console.log(hashando)
    if (!hashando) {
        res.render('home');
        return
    }
   
    console.log(req.body)
    console.log(foundUser)


    req.session.usuario = foundUser;

    res.redirect('/dashboardUsuario/meuPerfil');
});


  async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};
