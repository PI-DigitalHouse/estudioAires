const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const session = require('express-session');
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const models = require('../models');
const { Op } = require('sequelize');
const servico = require('../models/servico');

let orcamentosCadastrados=[];


module.exports.renderizaOrcamento = (req,res,next) => {

if(req.session.usuario){
  
  res.render('orcamento', {
    title : 'Novo Orçamento',
    dadosUsuario: req.session.usuario
  })
}else{
  console.log('n logado')
  res.render('orcamentoSLogin', {
    title : 'Novo Orçamento',
    dadosUsuario: req.session.usuario
  })
}
}



module.exports.novoOrcamento = (async (req,res,next) => {

  const dadosDoFormulario = req.body


  const {valor, idUsuario} =req.query
  


  const newService = await models.Servico.findOne({
    valor: {
      [Op.like]: `${valor || ''}%`,
    },
    
  })
  
  req.body.horarioFinal = req.body.horarioInicio
  let juncao = orcamentosCadastrados.concat(dadosDoFormulario.servico)

console.log(newService.valor)
console.log(dadosDoFormulario.servico)
console.log(juncao.length) //percorrendo o array e trazendo a quantidade de servico que tem nele


  const resultado = calculaOrcamento(dadosDoFormulario.tamanhoImovel, newService.valor, juncao.length )
  //req.body.valor = resultado


 dadosDoFormulario.valor = resultado
 dadosDoFormulario.reservadoPor = req.session.usuario.idUsuario
 dadosDoFormulario.membros_idMembro = 1
 dadosDoFormulario.status ='active'

  const reservas = await models.Reserva.create(dadosDoFormulario)

  if (!reservas) {
    res.render('orcamento')
    return
  }
  
  dadosDoFormulario.reservas_idReserva=reservas.idReserva
  
  await models.Orcamento.create(dadosDoFormulario)

  res.redirect('/') //redireciiona para home
 

})



 function calculaOrcamento(tamanhoImovel, servico, valor ){
    
let valorTotal = tamanhoImovel*(valor * servico)
    return valorTotal
 }

