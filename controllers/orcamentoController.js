const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro
const orcamentosCadastrados=[];
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
module.exports.renderizaOrcamento = (req,res,next) => {
    res.render('orcamento', {
        title : 'Novo Orçamento',
        dadosUsuario: req.session.usuario

})};

module.exports.novoOrcamento = (req,res,next) => {
    
  const dadosDoFormulario = req.body
  orcamentosCadastrados.push(dadosDoFormulario) //adicionando os dadosdo formulario no array
  salvarUsuario(orcamentosCadastrados)  //chamar a funcao para salvar o orcamento no JSON
  res.redirect('/') //redireciiona para home

}
function salvarUsuario (usuario){
    const str = JSON.stringify(usuario) //transforma usuario em string
    fs.writeFileSync('orcamentosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
    
  }