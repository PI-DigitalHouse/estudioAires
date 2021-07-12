
const models = require('../models');
const bcrypt =require('bcrypt');


module.exports.cadastroModal = (req, res) => {
  res.render('cadastro-usuario');

}


module.exports.postUsuario = (async (req, res) => {
  const user = req.body

  user.senha = hash(user.senha) //encriptando a senha
  user.senha2 = hash(user.senha2)
 
     
  await models.Usuario.create(user)
 

  res.redirect('/') //redireciiona para home

});

function hash(obj){
      
  const salt =bcrypt.genSaltSync(10)
  const psw = bcrypt.hashSync(obj, salt)
  return psw; 

}
async function compareHash(senha, hash) {
  return await bcrypt.compare(senha, hash);
};

