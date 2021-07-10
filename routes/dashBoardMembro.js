//dados para teste

const array = [{
    idUsuario: 3,
    idServico: 3,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    horariosSelecionados: ['4 de maio 2021, 10:00','4 de maio 2021, 14:00', '4 de maio 2021, 17:00'],
    nomeCliente: 'Maria da Silva',
    emailCliente: 'mariazinha@mail.com',
    telefoneCliente: '+55 00 00000 0000'
    
},{
    idUsuario: 3,
    idServico: 4,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    horariosSelecionados: ['4 de maio 2021, 10:00','4 de maio 2021, 14:00', '4 de maio 2021, 17:00'],
    nomeCliente: 'Maria da Silva',
    emailCliente: 'mariazinha@mail.com',
    telefoneCliente: '+55 00 00000 0000'
},{
    idUsuario: 3,
    idServico: 5,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    horariosSelecionados: ['4 de maio 2021, 10:00','4 de maio 2021, 14:00', '4 de maio 2021, 17:00'],
    nomeCliente: 'Maria da Silva',
    emailCliente: 'mariazinha@mail.com',
    telefoneCliente: '+55 00 00000 0000'
},{
    idUsuario: 3,
    idServico: 6,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    horariosSelecionados: ['4 de maio 2021, 10:00','4 de maio 2021, 14:00', '4 de maio 2021, 17:00'],
    nomeCliente: 'Maria da Silva',
    emailCliente: 'mariazinha@mail.com',
    telefoneCliente: '+55 00 00000 0000'
},{
    idUsuario: 3,
    idServico: 7,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    horariosSelecionados: ['4 de maio 2021, 10:00','4 de maio 2021, 14:00', '4 de maio 2021, 17:00'],
    nomeCliente: 'Maria da Silva',
    emailCliente: 'mariazinha@mail.com',
    telefoneCliente: '+55 00 00000 0000'
}
];


const express = require('express');
const router = express.Router();
const fs = require('fs')
const {calendario} = require('../controllers/DMController');
const checkSession = require('../middlewares/checkSession') 
const session = require('express-session');
//const usuarios = require('../usuariosCadastrados.json')



router.get('/meuPerfil', checkSession, function(req, res, next){
    res.render('dashboardMembroMeuPerfil',{
    title : 'Minha Agenda',
    dadosUsuario: req.session.usuario    });
})

router.get('/minhaAgenda', checkSession, function(req, res, next){
    res.render('dashboardMembro_minhaAgenda', {
        title : 'Minha Agenda',
        dadosUsuario: req.session.usuario
    });
});

router.get('/aprovacoes', checkSession, function(req, res, next){
    res.render('dashboardMembro_aprovacoes', {
        title: 'Aprovações',
        aprovacoes: array,
        dadosUsuario: req.session.usuario} );
})

router.get('/jobsFinalizados', checkSession, function (req, res, next){
    res.render('dashboardMembro_jobsFinalizados', {
        title: 'Meus jobs finalizados', 
        jobs: array,
        dadosUsuario: req.session.usuario })
} )

/*dentro dessa função eu preciso puxar os dados do usuário logado, imprimi-los no formulário de 
alteração de dados e tornar esses mesmos campos preenchidos editáveis*/ 
router.get('/alterarDados', checkSession, function(req, res, next){ 

    res.render('alterarDados', {usuario: {
        nome: req.session.nome,
        dadosUsuario: req.session.usuario
        
    }})
    
})
/* está dando erro pq eu não fiz a sessão nessa página. Preciso garantir que a sessão 
esteja implementada e que a sessão puxe o nome corretamente*/

//Visualização calendario
router.get ('/calendario', checkSession, calendario)

module.exports = router;