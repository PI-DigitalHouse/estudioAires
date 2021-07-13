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
  var servicos = req.body.servico
  const dadosDoFormulario = req.body
  const tamanhoImovel = req.body.tamanhoImovel
  var fotografia = 0
  var fotografia3603d = 0
  var videoDinamico = 0
  var imagensAereas = 0

  
  var juncao = orcamentosCadastrados.concat(servicos)

  
  for (var i =0; i < juncao.length; i++){
    if (juncao[i] == 'fotografia'){
      var fotografia = 0.2
      continue
    }
    else if(juncao[i] == 'videoDinamico'){
      var videoDinamico = 0.2
      continue
    }
    else if(juncao[i] == 'fotografia3603d'){
      var fotografia3603d = 0.2
      continue
    }
    else if(juncao[i] == 'imagensAereas'){
      var imagensAereas = 0.2
      continue
    }
    return
  }
       
  const resultado = calculaOrcamento(tamanhoImovel, fotografia, videoDinamico,fotografia3603d, imagensAereas )
  req.body.valor = resultado
  console.log(dadosDoFormulario)
  
  //console.log(juncao)
  console.log(resultado)
  //await models.Orcamento.create(dadosDoFormulario)
 
  //salvarUsuario(orcamentosCadastrados)  //chamar a funcao para salvar o orcamento no JSON
  //res.redirect('/') //redireciiona para home
 
}


)
/*function salvarUsuario (usuario){
    const str = JSON.stringify(usuario) //transforma usuario em string
    fs.writeFileSync('orcamentosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
    
  }*/

 function calculaOrcamento(juncao, serv1, serv2, serv3, serv4 ){
    

    var valorTotal = juncao*(0.8 + serv1 + serv2 + serv3 + serv4)
    return valorTotal
 }

