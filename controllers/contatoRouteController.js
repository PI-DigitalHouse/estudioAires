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
    res.render('contato');
}

module.exports.postContato = (req, res) => {
    const dados = { nome: req.body.nome, email: req.body.email, mensagem: req.body.mensagem }
    const currentContent = readFile()
    currentContent.push({ dados })
    writeFile(currentContent)
    res.redirect('/')
}