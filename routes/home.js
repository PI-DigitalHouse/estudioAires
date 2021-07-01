const express = require('express');
const router = express.Router();
const usuarios = require('../usuariosCadastrados.json')
const bcrypt = require('bcrypt')
const fs = require('fs')
const{getHome,recuSenha, getLogin, autenticacao} = require('../controllers/homeController');


// gets da home
router.get('/', getHome)

//↓↓↓↓↓↓ PARTE DE RECUPERAR SENHA AQUI ATÉ TIRAR DÚVIDA com require de fs lá em cima pra pegar

// const readFile = () => {
//   const content = fs.readFileSync('./emailDeRecuperacao.json', 'utf-8')
//   return JSON.parse(content)
// }

// const writeFile = (content) => {
//   const updateFile = JSON.stringify(content)
//   fs.writeFileSync('./emailDeRecuperacao.json', updateFile, 'utf-8')
// }

router.get('/recuperarSenha', recuSenha);
// router.post('/receberEmail', (req, res) => {
//   const { email } = req.body
//   const currentContent = readFile()
//   currentContent.push({ email })
//   writeFile(currentContent)
//   res.redirect('/login')
// })

//↑↑↑↑↑↑ PARTE DE RECUPERAR SENHA AQUI ATÉ TIRAR DÚVIDA com require de fs lá em cima pra pegar

//COISAS PARA COLOCAR AINDA (DEIXAR ORGANIZADO)
router.get('/login', getLogin);

router.post('/login/autentica', autenticacao);

module.exports = router;