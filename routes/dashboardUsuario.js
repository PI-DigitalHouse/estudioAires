var express = require('express');
var router = express.Router();

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

/* GET entregáveis. */
router.get('/entregaveis', (req, res) => {
  res.render('dashboardUsuario_entregaveis', { 
    title: 'Entregáveis', 
    entregaveis: array });
});

module.exports = router;