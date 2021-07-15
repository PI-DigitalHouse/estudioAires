const models = require('../models');
const bcrypt = require('bcrypt');
const session = require('express-session');


module.exports.getHome = (req, res) => {
    res.render('home', {
        dadosUsuario: req.session.usuario
    })
}

module.exports.recuSenha = (req, res) => {
    res.render('DU_recuperacaoSenha',{
        title:'Recuperar Senha',
        dadosUsuario: req.session.usuario,
        
    })
}

module.exports.getLogin = (req, res) => {
    res.render('login',{
        error: {
            email:'',
           
        },
        
        dadosUsuario: req.session.usuario
    })
}

module.exports.logar = (async (req, res) => {
    const { email, senha } = req.body;
    const userAdmin = 'admin2021'
    const senhaAdmin= '1234'

    if(userAdmin===req.body.email){
        if(senhaAdmin===req.body.senha){
         res.send('admin logado')}
        return
    }
    
    const foundUser = await models.Usuario.findOne({
        where: {
            email: req.body.email,
           
        }
    });

   
    if (!foundUser) {
        res.render('login', {
            error: {
                email: 'Usuário nao cadastrado'
            },
            value: email
        }) 
        console.log('email')
        return//colocar error no ejs login 
    }
    const hashando = await compareHash(req.body.senha, foundUser.senha)
    
    if (!hashando) {
        res.render('login',{
        error: {
            senha: 'Usuário ou senha incorreta'
        }
    });
        return
    }
  
    
  

    req.session.usuario = foundUser;

    res.redirect('/');
});


  async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};

module.exports.logOut =  (req, res) => {
    req.session.destroy();
    res.redirect('/');  
};