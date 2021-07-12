const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const orcamentosCadastrados=[];
const session = require('express-session');
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional


module.exports.renderizaOrcamento = (req,res,next) => {
    res.render('orcamento', {
        title : 'Novo Orçamento',
        dadosUsuario: req.session.usuario

})};



module.exports.novoOrcamento = (req,res,next) => {
  
  const medidasImovel = parseInt(req.body.MedidaImovel)
  const fotografiaS = parseFloat(req.body.Fotografia)
  const fotografia3603d = parseFloat(req.body.Fotografia3603d)
  const videoDinamico = parseFloat(req.body.VideoDinamico)
  const imagensAereas = parseFloat(req.body.ImagensAereas)

  const dadosDoFormulario = req.body
  const orcamento = calculaOrcamento(medidasImovel, fotografiaS, fotografia3603d, videoDinamico, imagensAereas)

  orcamentosCadastrados.push(dadosDoFormulario) //adicionando os dadosdo formulario no array
  orcamentosCadastrados.push(orcamento)
  
  console.log(orcamentosCadastrados)
  console.log(medidasImovel)
  
  //salvarUsuario(orcamentosCadastrados)  //chamar a funcao para salvar o orcamento no JSON
  //res.redirect('/') //redireciiona para home
 
}
function salvarUsuario (usuario){
    const str = JSON.stringify(usuario) //transforma usuario em string
    fs.writeFileSync('orcamentosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
    
  }

 function calculaOrcamento(medida,serv1, serv2, serv3, serv4 ){
    
    const valorTotal = medida*(0.8 + serv1 + serv2 + serv3 + serv4 )
    
    return valorTotal
 }

