const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const session = require('express-session');
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const models = require('../models');

var orcamentosCadastrados=[]; 


module.exports.renderizaOrcamento = (req,res,next) => {
    res.render('orcamento', {
        title : 'Novo Orçamento',
        dadosUsuario: req.session.usuario

})};
module.exports.renderizaOrcamentoSLogin = (req, res, next) =>{
  res.render('orcamentoSemLogin',{
    title : 'Novo Orçamento',
    dadosUsuario: req.session.usuario
  });
}



module.exports.novoOrcamento = (async (req,res,next) => {
  let servicos = req.body.servico
  let pagamento = req.body.pagamento
  let status = req.body.status= 'active';
  const dadosDoFormulario = req.body
  const tamanhoImovel = req.body.tamanhoImovel
  let fotografia = 0
  let fotografia3603d = 0
  let videoDinamico = 0
  let imagensAereas = 0

  

  const juncao = orcamentosCadastrados.concat(servicos)
  

  for (let i =0; i < juncao.length; i++){
    if (juncao[i] == 'fotografia'){
      let fotografia = 0.2
      continue
    }
    else if(juncao[i] == 'videoDinamico'){
      let videoDinamico = 0.2
      continue
    }
    else if(juncao[i] == 'fotografia3603d'){
      let fotografia3603d = 0.2
      continue
    }
    else if(juncao[i] == 'imagensAereas'){
      let imagensAereas = 0.2
      continue
    }
    return
  }
 //reservas



 dadosDoFormulario.reservadoPor = req.session.usuario.idUsuario
 dadosDoFormulario.aceitoPor = 1


       
  const resultado = calculaOrcamento(tamanhoImovel, fotografia, videoDinamico,fotografia3603d, imagensAereas )
  req.body.valor = resultado
  
  //console.log(juncao)
  console.log(resultado)


  const reservas = await models.Reserva.create(dadosDoFormulario)

  if (!reservas) {
    res.render('orcamento')
    return
  }
  dadosDoFormulario.reservas_idReserva=reservas.idReserva
  console.log(dadosDoFormulario)
  
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

 function calculaOrcamento(juncao, serv1, serv2, serv3, serv4 ){
    

    var valorTotal = juncao*(0.8 + serv1 + serv2 + serv3 + serv4)
    return valorTotal
 }

