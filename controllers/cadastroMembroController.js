const fs = require('fs');
const bcrypt =require('bcrypt');

const membrosCadastrados= [];


module.exports.cadastrarMembro = function(req, res, next) {
      const dadosDoFormulario = req.body
        dadosDoFormulario.password =hash(dadosDoFormulario.psw) //encriptando a senha
      dadosDoFormulario.password2 =hash(dadosDoFormulario.psw2)
      membrosCadastrados.push(dadosDoFormulario)
      salvarObjeto(membrosCadastrados)
      console.log(membrosCadastrados)
      res.redirect('/')
}

