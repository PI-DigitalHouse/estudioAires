const fs = require('fs')
dadosSalvos= []
const controlador = {
    cadastroMembro: (req, res) => {
        res.render('cadastroMembro', { title: 'cadastroMembro' });
    },
    enviaInfos: (req, res) => {
        const dadosDoFormulario = req.body
        dadosSalvos.push(dadosDoFormulario)
        res.send(201);
        console.log(dadosSalvos)
        salvarObjeto(dadosSalvos)
        res.redirect('/')
    }
}

function salvarObjeto(objeto){
    const str = JSON.stringify(objeto) // aqui estou transformando o objeto que captei do formulário em string
    fs.writeFileSync('novosMembros.json', str) //aqui indico ONDE e O QUE salvar. 
  }



module.exports = controlador;