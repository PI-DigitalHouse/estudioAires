var express = require('express');
var router = express.Router();

// dados para teste
    const array = [{
        idServico: 3,
        nomeArquivo: 'salaDeEstar_05042021.zip',
        tamanho: '5 MB'
    },
    {
        idServico: 3,
        nomeArquivo: 'salaDeJantar_05042021.zip',
        tamanho: '25 MB'
    },
    {
        idServico: 3,
        nomeArquivo: 'quarto_05042021.zip',
        tamanho: '250 MB'
    },
    {
        idServico: 3,
        nomeArquivo: 'cozinha_05042021.zip',
        tamanho: '25 MB'
    }];

    const array2 = [{
        idUsuario: 3,
        idServico: 3,
        endereco: 'Rua X',
        valorDoServico: 500.00,
        tamanhoImovel: 400,
        dataServico: '5 de março de 2020',
        servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
        statusServico: 'Sessão agendada'
    },{
        idUsuario: 3,
        idServico: 4,
        endereco: 'Rua X',
        valorDoServico: 500.00,
        tamanhoImovel: 400,
        dataServico: '5 de março de 2020',
        servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
        statusServico: 'Sessão em andamento'
    },{
        idUsuario: 3,
        idServico: 5,
        endereco: 'Rua X',
        valorDoServico: 500.00,
        tamanhoImovel: 400,
        dataServico: '5 de março de 2020',
        servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
        statusServico: 'Imagens em edição'
    },{
        idUsuario: 3,
        idServico: 6,
        endereco: 'Rua X',
        valorDoServico: 500.00,
        tamanhoImovel: 400,
        dataServico: '5 de março de 2020',
        servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
        statusServico: 'Imagens postadas'
    },{
        idUsuario: 3,
        idServico: 7,
        endereco: 'Rua X',
        valorDoServico: 500.00,
        tamanhoImovel: 400,
        dataServico: '5 de março de 2020',
        servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
        statusServico: 'Serviço cancelado'
    }
    ];

/* GET entregáveis */
router.get('/entregaveis/:idServico', (req, res) => {
  res.render('dashboardUsuario_entregaveis', { 
    title: 'Entregáveis', 
    entregaveis: array });
});

/* GET solicitações */
router.get('/solicitacoes/:idUsuario', (req, res) => {
    res.render('dashboardUsuario_solicitacoes', { 
      title: 'Solicitações', 
      solicitacoes: array2 });
  });
  

module.exports = router;