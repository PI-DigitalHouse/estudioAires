const fs = require('fs')

module.exports.renderiza = (req, res) => {
    let dadosUsuario = null
    let erros = []
    if (req.session && req.session.usuario) {
        dadosUsuario = req.session.usuario
    }
    res.render('contato', {
        title: 'Contato',
        erro: erros,
        dadosUsuario: dadosUsuario
    })
}

module.exports.postContato = (req, res) => {
    const dados = { nome: req.body.nome, email: req.body.email, mensagem: req.body.mensagem }
    if (!dados.email) {
        const erroEmail = 'Por favor informe o email'
        res.render('contato', {
            erro: erroEmail,
            dadosUsuario: null,
            title: 'Contato'
        })
        return
    } else if (!dados.nome) {
        const erroNome = 'Por favor informe o nome'
        res.render('contato', {
            erro: erroNome,
            dadosUsuario: null,
            title: 'Contato'
        })
        return
    } else if (!dados.mensagem) {
        const erroMensagem = 'Por favor escreva uma mensagem'
        res.render('contato', {
            erro: erroMensagem,
            dadosUsuario: null,
            title: 'Contato'
        })
        return
    } else {
        const currentContent = readFile()
        currentContent.push({ dados })
        writeFile(currentContent)
        res.redirect('/')
    }
}

const readFile = () => {
    const content = fs.readFileSync('./mensagemDeContato.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./mensagemDeContato.json', updateFile, 'utf-8')
}