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

module.exports.logarMembro = (async (req, res) => {
    const { email, senha } = req.body;
    
    
    const foundUser2 = await models.Membro.findOne({
        where: {
            email: req.body.email,
           
        }
    });
     
   
    const hashando2 = await compareHash(req.body.senha, foundUser2.senha)
    
   
  
   
  

    req.session.membro = foundUser2;

    res.redirect('/');
});









  async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};

module.exports.logOut =  (req, res) => {
    req.session.destroy();
    res.redirect('/');  
};

module.exports.renderizaOrcamentoSLogin = (req, res, next) =>{
    res.render('orcamentoSLogin', {
        dadosUsuario: req.session.usuario
    });
} 