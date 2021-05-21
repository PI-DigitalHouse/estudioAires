const express = require('express');
const router = express.Router();
const usuarios = require('../usuariosCadastrados.json')
const bcrypt = require('bcrypt')

// gets da home
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/login',function(req, res){
  res.render('login')
})

//fim dos gets da home

// posts da home

router.post('/login/autentica',function(req, res){
  
  for (var i = 0; i < usuarios.length; i++){
    
    bcrypt.compare(usuarios[i].senha, req.body.senha)
    if (req.body.email === usuarios[i].email && req.body.senha === usuarios[i].senha){
      res.render ('/dashboardMeuPerfil')
    }
  }
  res.send('Usuário ou senha inválidos')
})

//fim dos posts da home

//↓↓↓↓↓↓ PARTE DE CONTATO AQUI ATÉ TIRAR DÚVIDA
router.get('/contato', (req, res)=>{
  res.render('contato')
})



module.exports = router;