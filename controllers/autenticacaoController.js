/* const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');



module.exports.logar = (async (req, res) =>{
    const {email, senha } = req.body;
  
    const foundUser = await models.Usuario.findOne({
        where:{
            email:'', 
            senha:''
           }   
        });
  
    if (!foundUser) {
      res.render('home', {
        error: {
          email: 'cadastro nao encontrado'
        },
        value: email
      })
    }
  
    if (!compareHash(senha, foundUser.senha)) {
      res.render('home');
    }
  
    req.session.usuario = foundUser;
  
    res.redirect('/dashboardUsuario');
  });
 */


