const express = require('express');
const router = express.Router();
const { cadastroModal, postUsuario, errorMessage } = require('../controllers/cadastroUsuarioController')
const { check } = require('express-validator');

router.get('/', cadastroModal);

router.post('/', [
        check('nome').notEmpty().withMessage('Campo obrigatório').bail(),
        check('sobrenome').notEmpty().withMessage('Campo obrigatório').bail(),
        check('email').notEmpty().withMessage('Campo obrigatório').bail().
        isEmail().withMessage('E-mail inválido').bail(),
        check('telefone').isLength({ min: 10, max: 11 }).withMessage('Telefone incompleto').bail(),
        check('telefone').notEmpty().withMessage('Campo obrigatório').bail(),
        check('cpfCnpj').isLength({ min: 11, max: 14 }).withMessage('Valor de CPF ou CNPJ invalido').bail(),
        check('cpfCnpj').notEmpty().withMessage('Campo obrigatório').bail(),
        check('comoConheceu').notEmpty().withMessage('Campo obrigatório').bail(),
        check('termosDeUso').notEmpty().withMessage('Campo obrigatório').bail()
    ],
    postUsuario);



module.exports = router;