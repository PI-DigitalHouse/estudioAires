const fs = require('fs')

const readFile = () => {
    const content = fs.readFileSync('./mensagemDeContato.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./mensagemDeContato.json', updateFile, 'utf-8')
}

module.exports.renderiza = (req, res) => {
    let dadosUsuario = null
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('contato', {
        title: 'Contato',
        dadosUsuario: dadosUsuario
    })
}

module.exports.postContato = (req, res) => {
    const dados = { nome: req.body.nome, email: req.body.email, mensagem: req.body.mensagem }
    const currentContent = readFile()
    currentContent.push({ dados })
    writeFile(currentContent)
    res.redirect('/')
}