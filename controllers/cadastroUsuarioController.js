const models = require('../models');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const { Op } = require('sequelize');

module.exports.cadastroModal = (req, res) => {
    res.render('cadastro-usuario', {
        dadosUsuario: req.session.usuario,
        erros: {},
        title: 'Cadastro',
        erro:{
            email:''
          },
          value:{ },
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
    const usuario = await models.Usuario.findOne({
        where: {
            email: 
                user.email,
              
            cpfCnpj: 
                user.cpfCnpj
            
        }
    })
    if (usuario) {
        res.render('cadastro-usuario', {
            erro: {
                email:  'E-mail já cadastrado',
                cpfCnpj: 'CPF ja cadastrado'
                
            },
            dadosUsuario: null
        })
        return
    }
    if (!user.senha === user.senha2) {
        res.render('cadastro-usuario', {
            erro: {
                senha: {
                    msg: 'Senhas não compatíveis'
                }
            },
            dadosUsuario: null
        })
    }
    user.senha = hash(user.senha)
    user.senha2 = hash(user.senha2)
    console.log(user)
    await models.Usuario.create(user)
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