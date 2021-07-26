const models = require('../models');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

module.exports.cadastroModal = (req, res) => {
    res.render('cadastro-usuario', {
        dadosUsuario: req.session.usuario, //FAZ o IF no HEADER se nao existe usuario como vai ter sessao ? Revisar header
        erros: {},
        title: 'Cadastro',
    });

}


module.exports.postUsuario = (async(req, res) => {
    const user = req.body
    const error = validationResult(req)
    console.log(error.mapped())

    if (!error.isEmpty()) {
        res.render('cadastro-usuario', {
            erros: error.mapped(),
            dadosUsuario: null, //ficar esperto
            title: 'Cadastro'
        })
        return
    }

    //Validação de email existente no banco
    const usuario = await models.Usuario.findOne({
        where: {
            email: user.email
        }
    })
    if (usuario) {
        res.render('cadastro-usuario', {
            erros: {
                email: {
                    msg: 'E-mail já cadastrado'
                }
            },
            dadosUsuario: null //ficar esperto
        })
        return
    }

    //Validação da confirmação de senha do input ser compatível com a senha do input
    if (!user.senha === user.senha2) {
        res.render('cadastro-usuario', {
            erros: {
                senha: {
                    msg: 'Senhas não compatíveis'
                }
            },
            dadosUsuario: null //ficar esperto
        })
    }





    user.senha = hash(user.senha) //encriptando a senha
    user.senha2 = hash(user.senha2)
    console.log(user)
    await models.Usuario.create(user)

    res.redirect('/') //redireciona para home
});

function hash(obj) {

    const salt = bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw;

}
async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};