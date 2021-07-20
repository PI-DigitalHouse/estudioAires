const express = require('express');
const router = express.Router();
const { cadastroModal, postUsuario, errorMessage } = require('../controllers/cadastroUsuarioController')
const { check } = require('express-validator');

router.get('/', cadastroModal);

router.post('/novo', [check('cpfCnpj').isLength({ min: 11, max: 14 }).withMessage('Valor inválido'),
        check('email').isEmail().withMessage('Por Favor indique um e-mail válido')
    ],
    postUsuario);

//criar arquivo com o array e importar(o check tbm)

module.exports = router;