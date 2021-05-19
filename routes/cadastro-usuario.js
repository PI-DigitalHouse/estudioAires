const express = require('express');
const router = express.Router();
const fs =require ('fs'); //lib para manipular arquivo do sistema operacional
const bcrypt =require('bcrypt'); //chamando a lib para crip de hash de cadastro


const usuariosCadastrados=[];

/* GET cadastroUsuario */
 //localhost:3000/cadastro-usuario
router.get('/', function(req, res, next) {

res.render('cadastro-usuario');
});

router.post('/novo', function(req, res, next) { //rota para criacao do cadastro localhost/cadastro/novo
    const dadosDoFormulario = req.body
    dadosDoFormulario.psw =hash(dadosDoFormulario.psw) //encriptando a senha
    dadosDoFormulario.psw2 =hash(dadosDoFormulario.psw2) 
    usuariosCadastrados.push(dadosDoFormulario) //salvando oss dados
    salvarUsuario(usuariosCadastrados)  //chamar a funcao para salvar o usuario no JSON
    res.redirect('/') //redireciiona para home
  
  
    });
    
  
    function salvarUsuario (usuario){
      const str = JSON.stringify(usuario) //transforma usuario em string
      fs.writeFileSync('usuariosCadastrados.json', str)// criando o json com os usuarios cadastrados na string
      
    }
    
    function hash(obj){
      
      const salt =bcrypt.genSaltSync(10)
      const psw = bcrypt.hashSync(obj, salt)
      return psw; 
  
    }
   
  

  

module.exports = router;