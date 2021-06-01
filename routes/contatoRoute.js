const { Router } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs')

const readFile = () => {
    const content = fs.readFileSync('./mensagemDeContato.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./mensagemDeContato.json', updateFile, 'utf-8')
}

router.get('/', (req, res) => {
    res.render('contato')
})

router.post('/', (req, res) => {
    const dados = { nome: req.body.nome, email: req.body.email, mensagem: req.body.mensagem }
    const currentContent = readFile()
    currentContent.push({ dados })
    writeFile(currentContent)
    res.redirect('/')
})

module.exports = router