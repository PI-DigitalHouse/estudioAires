const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');



module.exports.loginMembro = (async (req, res) => {
  res.render('loginMembro',{
    error: {
        email:'',
       
    },
    
    dadosUsuario: req.session.usuario
})
});



module.exports.logarMembro = (async (req, res) => {
  const { email, senha } = req.body;
  
  
  const foundUser2 = await models.Membro.findOne({
      where: {
          email: req.body.email,
         
      }
  });
   
 
  const hashando2 = await compareHash(req.body.senha, foundUser2.senha)
  
 

 


  req.session.membro = foundUser2;

  res.redirect('meuPerfil');
});


async function compareHash(senha, hash) {
  return await bcrypt.compare(senha, hash);
};


