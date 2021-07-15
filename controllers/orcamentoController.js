const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const session = require('express-session');
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const models = require('../models');

var orcamentosCadastrados=[]; 


module.exports.renderizaOrcamento = (req,res,next) => {

if(req.session.usuario){
  console.log('logado')
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
    /*res.render('orcamento', {
        title : 'Novo Orçamento',
        dadosUsuario: req.session.usuario

})};*/
/*module.exports.renderizaOrcamentoSLogin = (req, res, next) =>{
  res.render('orcamentoSLogin',{
    title : 'Novo Orçamento',
    dadosUsuario: req.session.usuario
  });
}*/



module.exports.novoOrcamento = (async (req,res,next) => {
  let servicos = req.body.servico
  let pagamento = req.body.pagamento
  let status = req.body.status= 'active';
  const dadosDoFormulario = req.body
  const tamanhoImovel = req.body.tamanhoImovel
  var fotografia = 0
  var fotografia3603d = 0
  var videoDinamico = 0
  var imagensAereas = 0

 req.body.horarioFinal = req.body.horarioInicio


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


  const resultado = calculaOrcamento(tamanhoImovel, fotografia, videoDinamico,fotografia3603d, imagensAereas )
  req.body.valor = resultado
  console.log(resultado)


 dadosDoFormulario.reservadoPor = req.session.usuario.idUsuario
 dadosDoFormulario.aceitoPor = 1


       
  
  
  //console.log(juncao)
  

  console.log(dadosDoFormulario)
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

 function calculaOrcamento(juncao, serv1, serv2, serv3, serv4 ){
    

    var valorTotal = juncao*(0.8 + serv1 + serv2 + serv3 + serv4)
    return valorTotal
 }

