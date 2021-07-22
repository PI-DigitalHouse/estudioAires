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


  const {valor} =req.query
  


  const newService = await models.Servico.findOne({
    valor: {
      [Op.like]: `${valor || ''}%`,
    },
    
  })
 
  req.body.horarioFinal = req.body.horarioInicio
  let juncao = orcamentosCadastrados.concat(dadosDoFormulario.servico)
  
  /* for (let i =0; i < juncao.length; i++){
    if (juncao[i] == 'fotografia'){
      juncaoServico= 1
      continue
    }
    else if(juncao[i] == 'videoDinamico'){
      let videoDinamico= 1
      continue
    }
    else if(juncao[i] == 'fotografia3603d'){
     let fotografia3603d = 1
      continue
    }
    else if(juncao[i] == 'imagensAereas'){
      let imagensAereas = 1
      continue
    }
    return
  } */
 //reservas
console.log(newService.valor)
console.log(dadosDoFormulario.servico)
console.log(juncao.length) //percorrendo o array e trazendo a quantidade de servico que tem nele


  const resultado = calculaOrcamento(dadosDoFormulario.tamanhoImovel, newService.valor, juncao.length )
  //req.body.valor = resultado
  //console.log(resultado)

 dadosDoFormulario.valor = resultado
 dadosDoFormulario.reservadoPor =  1//req.session.usuario.idUsuario
 dadosDoFormulario.aceitoPor = 1
 dadosDoFormulario.membros_idMembro = 1
 dadosDoFormulario.status ='active'

       
  
  
  //console.log(juncao)
  

  //console.log(dadosDoFormulario)
  const reservas = await models.Reserva.create(dadosDoFormulario)

  if (!reservas) {
    res.render('orcamento')
    return
  }
  dadosDoFormulario.reservas_idReserva=reservas.idReserva
  
  
  await models.Orcamento.create(dadosDoFormulario)
/* 
  if (dadosDoFormulario) {
    res.render('/', {
        value: resultado
        
    } 
    ) 
    return */

 
  //salvarUsuario(orcamentosCadastrados)  //chamar a funcao para salvar o orcamento no JSON
  res.redirect('/') //redireciiona para home
 

})



/*function salvarUsuario (usuario){
    const str = JSON.stringify(usuario) //transforma usuario em string
    fs.writeFileSync('orcamentosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
    
  }*/

 function calculaOrcamento(tamanhoImovel, servico, valor ){
    
let valorTotal = tamanhoImovel*(valor * servico)
    return valorTotal
 }

