const models = require('../models');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');
const { unsubscribe } = require('../routes/cadastroUsuarioRoute');

module.exports.cadastroModal = (req, res) => {
    res.render('cadastro-usuario', {
        dadosUsuario: req.session.usuario,
        erros: {},
        title: 'Cadastro',
        erro: {
            email: ''
        },
        value: {},
        error: null
    });

}

module.exports.postUsuario = (async(req, res) => {
    const user = req.body
    const error = validationResult(req)
    console.log(error.mapped())
    if (!error.isEmpty()) {
        res.render('cadastro-usuario', {
            erro: error.mapped(),
            dadosUsuario: null,
            title: 'Cadastro'
        })
        return
    }
    const usuario = await models.usuarios.findOne({

        where: {
            [Op.or]: [
                { email: user.email },
                { cpfCnpj: user.cpfCnpj }
            ]
        }
    });



    if (usuario) {
        res.render('cadastro-usuario', {
            erro: {
                email: 'E-mail ou CPF/CNPJ já cadastrado'


            },
            dadosUsuario: null,
            title: 'Cadastro'
        })
        return
    }
    if (user.senha != user.senha2) {
        res.render('cadastro-usuario', {
            erro: {
                senha: 'Senhas não compatíveis'

            },
            dadosUsuario: null,
            title: 'Cadastro'
        })
    }
    user.senha = hash(user.senha)
    user.senha2 = hash(user.senha2)
    console.log(user)
    await models.usuarios.create(user)
    res.redirect('/')
});

function hash(obj) {
    const salt = bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw;
}
async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};