const express = require('express');
const router = express.Router();
const usuarios = require('../usuariosCadastrados.json')
const bcrypt = require('bcrypt')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/login',function(req, res, next){
  res.render('login')
})

router.post('/login/autentica',function(req, res, next){
  
  for (var i = 0; i < usuarios.length; i++){
    
    bcrypt.compare(usuarios[i].senha, req.body.senha)
    if (req.body.email === usuarios[i].email && req.body.senha === usuarios[i].senha){
      res.render ('/dashboardMeuPerfil')
    }
  }
  res.send('Usuário ou senha inválidos')
})

module.exports = router;
