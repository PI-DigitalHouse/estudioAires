const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');

module.exports.getHome = (req, res) => {
    res.render('home')
}

module.exports.recuSenha = (req, res) => {
    res.render('DU_recuperacaoSenha')
}

module.exports.getLogin = (req, res) => {
    res.render('login')
}

module.exports.logar = (async (req, res) => {
    const {email, psw } = req.body;
  
    const foundUser = await models.Usuario.findOne({
        where:{
            email: req.body.email, 
            senha: req.body.psw
           }   
        });
  
    if (!foundUser) {
      res.render('home', {
        error: {
          email: 'cadastro nao encontrado'
        },
        value: email
      }) //colocar error no ejs login 
    }
  
    if (!compareHash(psw, foundUser.senha)) {
      res.render('home');
    }
  
    req.session.usuario = foundUser;
  
    res.redirect('/dashboardUsuario');
  });


  function compareHash (senha, hash) {
    return bcrypt.compareSync(senha, hash);
  };
