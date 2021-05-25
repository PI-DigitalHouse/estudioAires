const express = require('express');
const router = express.Router();
const usuarios = require('../usuariosCadastrados.json')
const bcrypt = require('bcrypt')
const fs = require('fs')

// gets da home
router.get('/', function(req, res) {
  res.render('home');
});



//fim dos gets da home

// posts da home

//fim dos posts da home

//↓↓↓↓↓↓ PARTE DE CONTATO AQUI ATÉ TIRAR DÚVIDA com require de fs lá em cima pra pegar

const readFile = () => {
  const content = fs.readFileSync('./mensagemDeContato.json', 'utf-8')
  return JSON.parse(content)
}

const writeFile = (content) => {
  const updateFile = JSON.stringify(content)
  fs.writeFileSync('./mensagemDeContato.json', updateFile, 'utf-8')
}

router.get('/contato', (req, res)=>{
  res.render('contato')
})

router.post('/contate', (req, res) => {
  const dados = {nome: req.body.nome, email: req.body.email, mensagem: req.body.mensagem}
  const currentContent = readFile()
  currentContent.push({ dados })
  writeFile(currentContent)
  res.redirect('/')
})

//↑↑↑↑↑↑ PARTE DE CONTATO AQUI ATÉ TIRAR DÚVIDA com require de fs lá em cima pra pegar

//↓↓↓↓↓↓ PARTE DE RECUPERAR SENHA AQUI ATÉ TIRAR DÚVIDA com require de fs lá em cima pra pegar

// const readFile = () => {
//   const content = fs.readFileSync('./emailDeRecuperacao.json', 'utf-8')
//   return JSON.parse(content)
// }

// const writeFile = (content) => {
//   const updateFile = JSON.stringify(content)
//   fs.writeFileSync('./emailDeRecuperacao.json', updateFile, 'utf-8')
// }

router.get('/recuperarSenha', (req, res)=>{
  res.render('DU_recuperacaoSenha')
})

// router.post('/receberEmail', (req, res) => {
//   const { email } = req.body
//   const currentContent = readFile()
//   currentContent.push({ email })
//   writeFile(currentContent)
//   res.redirect('/login')
// })

//↑↑↑↑↑↑ PARTE DE RECUPERAR SENHA AQUI ATÉ TIRAR DÚVIDA com require de fs lá em cima pra pegar

//COISAS PARA COLOCAR AINDA (DEIXAR ORGANIZADO)
router.get('/login',function(req, res){
  res.render('login')
})

router.post('/login/autentica',function(req, res){
  
  for (var i = 0; i < usuarios.length; i++){
    
    bcrypt.compare(usuarios[i].senha, req.body.senha)
    if (req.body.email === usuarios[i].email && req.body.senha === usuarios[i].senha){
      res.render ('/dashboardMeuPerfil')
    }
  }
  res.send('Usuário ou senha inválidos')
})

module.exports = router;