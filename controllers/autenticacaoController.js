const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');


module.exports.autenticaUsuario = (async (req, res) => {
    const usuarioLogin = req.body
    const userDb = await models.usuario.findOne(
        {
            where: {
                email: usuarioLogin.email,
            }
        }).then(userDb => {
            if (userDb) {
                req.session.estaAuntenticado = true;
                
            }
            res.redirect('/dashboardUsuario');

        })

}) 




