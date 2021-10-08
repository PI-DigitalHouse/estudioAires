const models = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize')


module.exports.recuperaSenha = (req, res) => {
    res.render('DU_recuperacaoSenha', {
        title: 'Recuperação de Senha',
        dadosUsuario: req.session.usuario
    });
}

module.exports.showAlteraSenha = (req, res) => {
    res.render('DU_alteracaoSenha', {
        title: 'Altere a sua Senha',
        dadosUsuario: req.session.usuario
    });
}

module.exports.alteraSenha = async(req, res) => {
    const dadosForm = req.body
    const usuario = await models.usuarios.findOne({
        where: {
            idUsuario: req.session.usuario.idUsuario
        }
    });
    const hashando = await compareHash(dadosForm.senhaAntiga, usuario.senha)
    if (!hashando) {
        res.render('DU_alteracaoSenha', {
            erros: {
                senhaAntiga: {
                    msg: 'Senha não correspondente'
                }
            },
            dadosUsuario: null
        })
        return
    }
    if (!dadosForm.senhaNova === dadosForm.senhaNova2) {
        res.render('DU_alteracaoSenha', {
            erros: {
                senhaNova: {
                    msg: 'As senhas não correspondem'
                }
            },
            dadosUsuario: null
        })
        return
    }
    const update = await models.usuarios.update({
        senha: hash(dadosForm.senhaNova)
    }, {
        where: {
            idUsuario: req.session.usuario.idUsuario
        }
    })
    res.redirect('/dashboardUsuario/meuPerfil')
}

module.exports.meuPerfil = (req, res) => {
    console.log(req)
    res.render('DU_meuPerfil', {
            title: 'Meu Perfil',
            dadosUsuario: req.session.usuario
        }

    );
}

module.exports.showAlteraDados = (req, res) => {
    res.render('alterarDados', {
        title: 'Alterar Dados',
        dadosUsuario: req.session.usuario
    })
}

module.exports.alteraDados = async(req, res) => {
    let dadosNovos = req.body

    const update = await models.usuarios.update(dadosNovos, {
        where: {
            idUsuario: req.session.usuario.idUsuario
        }
    })
    const resultados = await models.usuarios.findOne({
        where: {
            idUsuario: req.session.usuario.idUsuario
        }
    })
    req.session.save(function() {
        req.session.usuario = resultados
        res.redirect('/dashboardUsuario/meuPerfil')
    })
}

module.exports.mostrarSolicitacoes = (async(req, res) => {
    const {
        idSolicitacao,
        endereco,
        tamanhoImovel,
        valor,
        pagamento,
        status
    } =
    req.query
    const resultadoOrcamentos = await models.orcamentos.findAll({
        where: {
            idSolicitacao: {
                [Op.like]: `${idSolicitacao || ''}%`
            },
            endereco: {
                [Op.like]: `${endereco || ''}%`
            },
            tamanhoImovel: {
                [Op.like]: `${tamanhoImovel || ''}%`
            },
            valor: {
                [Op.like]: `${valor || ''}%`
            },
            pagamento: {
                [Op.like]: `${pagamento || ''}%`
            },
            status: {
                [Op.like]: `${status || ''}%`
            },
        },
        include: {
            model: models.reservas,
            as: 'reservas',
            attributes: ['status', 'horarioInicio', 'dataInicio', 'servico'],
        },
    });
    res.render('DU_solicitacoes', {
        resultadoOrcamentos,
        title: 'Solicitacoes',
        dadosUsuario: req.session.usuario
    })

    console.log(resultadoOrcamentos)

})

function hash(obj) {

    const salt = bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw;

}

async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};