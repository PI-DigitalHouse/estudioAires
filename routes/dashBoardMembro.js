const express = require('express');
const router = express.Router();
const fs = require('fs')

const usuarios = require('../usuariosCadastrados.json')



router.get('/', function(req, res, next){
    
    res.render('dashboardMembroMeuPerfil', usuarios)
})

router.get('/jobsFinalizados', function (req, res, next){
    res.render('dashboardMembro_jobsFinalizados', {title: 'Meus jobs finalizados'})
} )

/*dentro dessa função eu preciso puxar os dados do usuário logado, imprimi-los no formulário de 
alteração de dados e tornar esses mesmos campos preenchidos editáveis*/ 
router.get('/alterarDados', function(req, res, next){ 

    res.render('alterarDados', {usuario: {
        nome: req.session.nome
    }})
    
})
/* está dando erro pq eu não fiz a sessão nessa página. Preciso garantir que a sessão 
esteja implementada e que a sessão puxe o nome corretamente*/

router.get('/jobsFinalizados', function(req, res, next){
    res.render('dashboardMembro_jobsFinalizados')
})

router.get('/minhaAgenda', function(req, res, next){
    res.render('dashboardMembro_minhaAgenda')
})

router.get('/aprovacoes', function(req, res, next){
    res.render('dashboardMembro_aprovacoes')
})

module.exports = router;