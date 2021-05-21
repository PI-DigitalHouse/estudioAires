const fs = require('fs')
const bcrypt =require('bcrypt');
const dadosSalvos= []

const controlador = {
    cadastroMembro: (req, res) => {
        res.render('cadastroMembro', { title: 'cadastroMembro' });
    },
    enviaInfos: (req, res) => {
        const dadosDoFormulario = req.body
        dadosDoFormulario.password =hash(dadosDoFormulario.password) //encriptando a senha
        dadosDoFormulario.password2 =hash(dadosDoFormulario.password2)
        dadosSalvos.push(dadosDoFormulario)
        //res.send(201);
        console.log(dadosSalvos)
        salvarObjeto(dadosSalvos)
        res.redirect('/')
        console.log('novosMembros')
    }
}
//function controlador (req, res) {


//}

function salvarObjeto(objeto){
    const str = JSON.stringify(objeto) // aqui estou transformando o objeto que captei do formulário em string
    fs.writeFileSync('novosMembros.json', str) //aqui indico ONDE e O QUE salvar. 
  }


  function hash(obj){
      
    const salt =bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(obj, salt)
    return password; 

  }

module.exports = controlador;