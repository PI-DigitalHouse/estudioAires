const fs =require ('fs')
const bcrypt =require('bcrypt');
const usuariosCadastrados=[]
module.exports.cadastroModal = (req, res) => {
    res.render('cadastro-usuario');
}

module.exports.postUsuario = (req, res) => { //rota para criacao do cadastro localhost/cadastro/novo
    const dadosDoFormulario = req.body
    dadosDoFormulario.psw =hash(dadosDoFormulario.psw) //encriptando a senha
    dadosDoFormulario.psw2 =hash(dadosDoFormulario.psw2) 
    usuariosCadastrados.push(dadosDoFormulario) //salvando oss dados
    salvarUsuario(usuariosCadastrados)  //chamar a funcao para salvar o usuario no JSON
    res.redirect('/') //redireciiona para home
  
  
    }

    function salvarUsuario (usuario){
        const str = JSON.stringify(usuario) //transforma usuario em string
        fs.writeFileSync('usuariosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
        
      }
      
      function hash(obj){
        
        const salt =bcrypt.genSaltSync(10)
        const psw = bcrypt.hashSync(obj, salt)
        return psw; 
    
      }