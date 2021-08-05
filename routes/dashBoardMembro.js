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

const models = require('../models');
const express = require('express');
const router = express.Router();
const fs = require('fs')
const {calendario, bloquear, aprovacoes, mostraJobs, buscaJob} = require('../controllers/DMController');
const {loginMembro, logarMembro} =require('../controllers/autenticacaoMembro')
const checkSessionMembro = require('../middlewares/checkMembro') 
const session = require('express-session');
const { Router } = require('express');
//const usuarios = require('../usuariosCadastrados.json')


router.get('/login-membro', loginMembro)

router.post('/login-membro', logarMembro)

//rotas de membros que precisam de autenticacao

router.get('/meuPerfil',checkSessionMembro, function(req, res, next){
    res.render('dashboardMembroMeuPerfil',{
    title : 'Minha Agenda',
    dadosUsuario: req.session.usuario,
    dadosMembro: req.session.membro   });
})

/* router.get('/minhaAgenda', checkSessionMembro, aprovacoes); */
 router.get('/aprovacoes', checkSessionMembro, aprovacoes );

//Membro -> jobs finalizados
router.get('/jobsFinalizados', checkSessionMembro, mostraJobs)

/*dentro dessa função eu preciso puxar os dados do usuário logado, imprimi-los no formulário de 
alteração de dados e tornar esses mesmos campos preenchidos editáveis*/ 
router.get('/alterarDados',  function(req, res, next){ 

    res.render('alterarDados', {usuario: {
        nome: req.session.nome,
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro 
        
    }})
    
})
/* está dando erro pq eu não fiz a sessão nessa página. Preciso garantir que a sessão 
esteja implementada e que a sessão puxe o nome corretamente*/
/* sessao implementada, falta ajusta middleware e puxar os dados do usuario membro! Ass.: Amanda */

//Visualização calendario
router.get ('/calendario', checkSessionMembro,  calendario)

//Bloqueio de calendario
router.post ('/calendario', checkSessionMembro, bloquear)

//Busca jobs por ID
router.get('/buscar', checkSessionMembro, buscaJob)

module.exports = router;