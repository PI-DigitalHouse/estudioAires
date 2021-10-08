const models = require('../models');
const express = require('express');
const bcrypt = require('bcrypt');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

module.exports.showCadastroMembro = (req, res) => {
    res.render('cadastroMembro', {
        title: 'Dashboard do Admin',
        dadosUsuario: req.session.usuario,
        dadosAdmin: req.session.admin
    })
}

module.exports.postMembro = (async(req, res) => {
    const membroUsuario = req.body
    console.log(membroUsuario)
    membroUsuario.senha = hash(membroUsuario.senha)
    membroUsuario.senha2 = hash(membroUsuario.senha2)
    console.log(membroUsuario)
    await models.membros.create(membroUsuario)
    res.redirect('/admin/dashboardAdmin')
});

module.exports.loginAdmin = (req, res) => {
    res.render('DB_Admin', {
        title: 'Dashboard do Admin',
        dadosUsuario: req.session.usuario,
        dadosAdmin: req.session.admin
    })
}

module.exports.logarAdmin = (req, res) => {
    const { emailAdmin, senhaAdmin } = req.body;
    const userAdmin = 'admin2021'
    const senhaAdmin2 = '1234'
    if (userAdmin === req.body.emailAdmin) {
        if (senhaAdmin2 === req.body.senhaAdmin) {
            req.session.admin = userAdmin;
            res.redirect('/admin/dashboardAdmin')
        }
        return
    }
}

module.exports.getDashAdmin = (req, res) => {
    res.render('DB_AdminAuth', {
        title: 'Dashboard do Admin',
        dadosUsuario: req.session.usuario,
        dadosAdmin: req.session.admin
    })
}

module.exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};

function salvarObjeto(objeto) {
    const str = JSON.stringify(objeto)
    fs.writeFileSync(path.join(__dirname, 'novosMembros.json'), str)
}

function hash(obj) {
    const salt = bcrypt.genSaltSync(10)
    const password = bcrypt.hashSync(obj, salt)
    return password;
}

async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};