const models = require('../models');
const bcrypt =require('bcrypt');

let errorMessage= ''
module.exports.cadastroModal = (req, res) => {
  res.render('cadastro-usuario');
}


module.exports.postUsuario = (async (req, res) => {
  const usuario = req.body


  usuario.senha = hash(usuario.senha) //encriptando a senha

  if(usuario.senha!==usuario.senha2){
   errorMessage='Nao compativel'
  
  } 
  await models.Usuario.create(usuario)
  console.log(usuario)
  res.redirect('/') //redireciiona para home

});

function hash(obj){
      
  const salt =bcrypt.genSaltSync(10)
  const psw = bcrypt.hashSync(obj, salt)
  return psw; 

}

