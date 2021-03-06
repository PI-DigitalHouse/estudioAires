const models = require('../models');
const session = require('express-session');
const { Op } = require('sequelize');

module.exports.calendario = (req, res) => {
    res.render('DM_calendario', {
        title: 'Minha agenda',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro,
    });
};

module.exports.minhaAgenda = (async(req, res) => {
    const { idSolicitacao, endereco, valor, tamanhoImovel, sessaoShooting } =
        req.query;
    const resultados = await models.Orcamento.findAll({
        where: {
            idSolicitacao: {
                [Op.like]: `${idSolicitacao || ''}%`,
            },
            endereco: {
                [Op.like]: `${endereco || ''}%`,
            },
            tamanhoImovel: {
                [Op.like]: `${tamanhoImovel || ''}%`,
            },
            valor: {
                [Op.like]: `${valor || ''}%`,
            },
        },
        include: [{
            model: models.Reserva,
            as: 'reservas',
            include: {
                model: models.Usuario,
                as: 'usuarios',
                attributes: ['nome', 'email', 'telefone'],
            },
        },
        {
            model: models.Servico,
            as: 'services',
            attributes: ['tipoDeServico'],
        },
        ],
        dadosMembro: req.session.membro,
    });
    
    res.render('DM_minhaAgenda', {
        title: 'Minha agenda',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro,
        resultados
    });
});

module.exports.bloquear = async (req, res, next) => {
    const bloqueio = req.body;
    bloqueio.reservadoPor = req.session.membro.idMembro;
    bloqueio.aceitoPor = req.session.membro.idMembro;
    bloqueio.idSolicitacao = 1;
    console.log(bloqueio);
    console.log(typeof req.body.horarioInicio)
    await models.Reserva.create(bloqueio);
    res.redirect('/');
};

module.exports.mostraJobs = async (req, res) => {
    const { idSolicitacao, endereco, valor, tamanhoImovel } =
        req.query;
    const resultadosJobs = await models.Orcamento.findAll({
        where: {
            idSolicitacao: {
                [Op.like]: `${idSolicitacao || ''}%`,
            },
            endereco: {
                [Op.like]: `${endereco || ''}%`,
            },
            tamanhoImovel: {
                [Op.like]: `${tamanhoImovel || ''}%`,
            },
            valor: {
                [Op.like]: `${valor || ''}%`,
            },
        },
        include: [{
            model: models.Reserva,
            as: 'reservas',
           
            include: {
                model: models.Usuario,
                as: 'usuarios',
                attributes: ['nome', 'email', 'telefone'],
            },
        },
        {
            model: models.Servico,
            as: 'services',
            attributes: ['tipoDeServico'],
        },
        ],
        dadosMembro: req.session.membro,
    });
    
    console.log(resultadosJobs);
    res.render('DM_jobsFinalizados', {
        title: 'Meus jobs finalizados',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro,
        resultadosJobs,
    });
};

module.exports.aprovacoes = async (req, res) => {
    const {
        idSolicitacao,
        endereco,
        tamanhoImovel,
        valor,
        nomeContato,
        telefoneContato,
        horarioInicio,
        status,
        email,
    } = req.query;
    const resultados = await models.Orcamento.findAll({
        where: {
            idSolicitacao: {
                [Op.like]: `${idSolicitacao || ''}%`,
            },
            endereco: {
                [Op.like]: `${endereco || ''}%`,
            },
            tamanhoImovel: {
                [Op.like]: `${tamanhoImovel || ''}%`,
            },
            valor: {
                [Op.like]: `${valor || ''}%`,
            },
            nomeContato: {
                [Op.like]: `${valor || ''}%`,
            },
            telefoneContato: {
                [Op.like]: `${valor || ''}%`,
            },
        },
        include: {
            model: models.Reserva,
            as: 'reservas',
            attributes: ['status', 'horarioInicio'],
            include: {
                model: models.Usuario,
                as: 'usuarios',
                attributes: ['email'],
            },
        },
    });
    console.log(resultados.length);
    res.render('DM_aprovacoes', {
        resultados,
        title: 'Minha Agenda',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro,
    });
};

module.exports.buscaJob = (async (req, res) => {
    const { jobId } = req.query;
    const listaJobs = await models.Orcamento.findOne({
        where: {
            idSolicitacao: {
                [Op.like]: `${jobId}%`,
            }
        }
    })
    res.render('listaJob', { listaJobs });
})

module.exports.meuPerfilM = (req, res) => {
    const a = []
    res.render('DM_meuPerfil', {
            title: 'Meu Perfil',
            dadosUsuario: a,
            dadosMembro: req.session.membro
        }

    );
}

module.exports.mostraAlteraDados = (async (req, res) => {
    const a = []
    res.render('alterarDadosMembro', {
        dadosMembro: req.session.membro,
        dadosUsuario: a,
        title: 'Alterar Dados'
    })
})

module.exports.alteraDados = async(req, res) => {
    let dadosNovos = req.body

    const update = await models.Membro.update(dadosNovos, {
        where: {
            idMembro: req.session.membro.idMembro
        }
    })
    const resultados = await models.Membro.findOne({
        where: {
            idMembro: req.session.membro.idMembro
        }
    })
    req.session.save(function() {
        req.session.membro = resultados
        res.redirect('/dashboardMembro/meuPerfil')
    })
}

