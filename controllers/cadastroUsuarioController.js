const models = require('../models');
const bcrypt = require('bcrypt');
const { body } = require('express-validator');

module.exports.cadastroModal = (req, res) => {
    res.render('cadastro-usuario', {
        dadosUsuario: req.session.usuario
    });

}


module.exports.postUsuario = (async(req, res) => {
    const user = req.body
    console.log(user)

    //Verificação se e-mail já está em uso
    body('email').custom(value => {
        return Usuario.findUserByEmail(value).then(user => {
            if (user) {
                return Promise.reject('Este e-mail já está em uso');
            }
        });
    })

    //Verifica se as duas senhas são iguais
    body('senha2').custom((value, { req }) => {
        if (value !== req.body.senha) {
            throw new Error('Suas senhas não batem');
        }
        return true;
    })

    user.senha = hash(user.senha) //encriptando a senha
    user.senha2 = hash(user.senha2)
    console.log(user)
    await models.Usuario.create(user)

    res.redirect('/') //redireciiona para home
});

function hash(obj) {

    const salt = bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw;

}
async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};