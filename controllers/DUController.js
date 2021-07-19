const models = require('../models');
const bcrypt = require('bcrypt');

// dados para teste
const array = [{
        idServico: 3,
        nomeArquivo: 'salaDeEstar_05042021.zip',
        tamanho: '5 MB'
    },
    {
        idServico: 3,
        nomeArquivo: 'salaDeJantar_05042021.zip',
        tamanho: '25 MB'
    },
    {
        idServico: 3,
        nomeArquivo: 'quarto_05042021.zip',
        tamanho: '250 MB'
    },
    {
        idServico: 3,
        nomeArquivo: 'cozinha_05042021.zip',
        tamanho: '25 MB'
    }
];

const array2 = [{
    idUsuario: 3,
    idServico: 3,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    statusServico: 'Sessão agendada'
}, {
    idUsuario: 3,
    idServico: 4,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    statusServico: 'Sessão em andamento'
}, {
    idUsuario: 3,
    idServico: 5,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    statusServico: 'Imagens em edição'
}, {
    idUsuario: 3,
    idServico: 6,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    statusServico: 'Imagens postadas'
}, {
    idUsuario: 3,
    idServico: 7,
    endereco: 'Rua X',
    valorDoServico: 500.00,
    tamanhoImovel: 400,
    dataServico: '5 de março de 2020',
    servicosContratados: ['Fotografia', ' Fotografia 3D', ' Vídeo'],
    statusServico: 'Serviço cancelado'
}];

module.exports.listEntregaveis = (req, res) => {
    res.render('dashboardUsuario_entregaveis', {
        title: 'Entregáveis',
        entregaveis: array,
        dadosUsuario: req.session.usuario
    });
}

module.exports.listSolicitacoes = (req, res) => {
    res.render('dashboardUsuario_solicitacoes', {
        title: 'Solicitações',
        solicitacoes: array2,
        dadosUsuario: req.session.usuario
    });
}

module.exports.recuperaSenha = (req, res) => {
    res.render('DU_recuperacaoSenha', {
        title: 'Recuperação de Senha',
        dadosUsuario: req.session.usuario
    });
}

module.exports.showAlteraSenha = (req, res) => {
    res.render('dashboardUsuario_alteracaoSenha', {
        title: 'Altere a sua Senha',
        dadosUsuario: req.session.usuario
    });
}

module.exports.alteraSenha = async(req, res) => {
    const dadosForm = req.body
        // console.log(dadosForm)

    //Chamando o usuário pela sessão
    const usuario = await models.Usuario.findOne({
        where: {
            idUsuario: req.session.usuario.idUsuario
        }
    });
    // console.log(usuario)

    //Validando senha do banco com a do input
    const hashando = await compareHash(dadosForm.senhaAntiga, usuario.senha)

    if (!hashando) {
        res.render('dashboardUsuario_alteracaoSenha', {
            erros: {
                senhaAntiga: {
                    msg: 'Senha não correspondente'
                }
            },
            dadosUsuario: null //ficar esperto
        })
        return
    }

    //Verificando senhas iguais nos inputs de novaSenha1 e 2
    if (!dadosForm.senhaNova === dadosForm.senhaNova2) {
        res.render('dashboardUsuario_alteracaoSenha', {
            erros: {
                senhaNova: {
                    msg: 'As senhas não correspondem'
                }
            },
            dadosUsuario: null //ficar esperto
        })
        return
    }

    const update = await models.Usuario.update({
            senha: hash(dadosForm.senhaNova)
        }, {
            where: {
                idUsuario: req.session.usuario.idUsuario
            }
        }

    )
    res.redirect('/dashboardUsuario/meuPerfil')
}

module.exports.meuPerfil = (req, res) => {
    console.log(req)
    res.render('dashboardUsuario_meuPerfil', {
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

    const update = await models.Usuario.update(dadosNovos, {
            where: {
                idUsuario: req.session.usuario.idUsuario
            }
        }

    )
    res.redirect('/dashboardUsuario/meuPerfil')
}

function hash(obj) {

    const salt = bcrypt.genSaltSync(10)
    const psw = bcrypt.hashSync(obj, salt)
    return psw;

}

async function compareHash(senha, hash) {
    return await bcrypt.compare(senha, hash);
};