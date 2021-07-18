const fs = require('fs');
const bcrypt =require('bcrypt');
const express = require('express');
const membrosCadastrados= [];


module.exports.cadastrarMembro = function(req, res, next) {
      const dadosDoFormulario = req.body
      dadosDoFormulario.psw =hash(dadosDoFormulario.psw) //encriptando a senha
      dadosDoFormulario.psw2 =hash(dadosDoFormulario.psw2)
      membrosCadastrados.push(dadosDoFormulario)
      salvarObjeto(membrosCadastrados)
      console.log(membrosCadastrados)
      res.redirect('/')
}

module.exports.renderizaCadastroMembro = function(req, res, next){
  res.render('cadastroMembro', {
    dadosUsuario: req.session.usuario
  });
}

function salvarObjeto(objeto){
  const str = JSON.stringify(objeto) // aqui estou transformando o objeto que captei do formulário em string
  fs.writeFileSync('novosmembros.json', str) //aqui indico ONDE e O QUE salvar. 
}

function hash(obj){
    
  const salt =bcrypt.genSaltSync(10)
  const password = bcrypt.hashSync(obj, salt)
  return password; 

}