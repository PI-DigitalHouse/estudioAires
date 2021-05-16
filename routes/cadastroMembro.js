var express = require('express');
var router = express.Router();
const fs = require('fs')
dadosSalvos= []

/* GET home page. */
router.get('/membro', function(req, res, next) {
  res.render('cadastroMembro', { title: 'cadastroMembro' });
});

router.post('/membro', function(req, res, next) {
  const dadosDoFormulario = req.body
  dadosSalvos.push(dadosDoFormulario)
  res.send(201);
  console.log(dadosSalvos)
  salvarObjeto(dadosSalvos)
});

function salvarObjeto(objeto){
  const str = JSON.stringify(objeto) // aqui estou transformando o objeto que captei do formulário em string
  fs.writeFileSync('novosMembros.json', str) //aqui indico ONDE e O QUE salvar. 
}

module.exports = router;