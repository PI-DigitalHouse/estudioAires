const express = require('express');
const router = express.Router();
const fs = require('fs')

router.get('/', function(req, res, next){
    res.render('dashboardMembroMeuPerfil',{title: 'Meu perfil'})
})

module.exports = router;