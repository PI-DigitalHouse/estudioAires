const bcrypt = require('bcrypt');
const session = require('express-session');
const fs = require('fs');
const models = require('../models');
const { Op } = require('sequelize');
const servico = require('../models/servico');
const { response } = require('express');
const { stringify } = require('querystring');
let orcamentosCadastrados = [];

module.exports.renderizaOrcamento = async(req, res, next) => {
    const { idReserva } = req.query;
    const bloqueios = await models.Reserva.findAll({
        where: {
            idReserva: {
                [Op.like]: `${idReserva || ''}%`,
            }
        },
        attributes: ['dataInicio', 'horarioInicio']
    });
    const agendamentos = JSON.stringify(bloqueios)
    console.log(agendamentos)
    if (req.session.usuario) {
        res.render('orcamento', {
            title: 'Novo Orçamento',
            dadosUsuario: req.session.usuario,
            horariosBloqueados: agendamentos,
        })
    } else {
        console.log('n logado')
        res.render('orcamentoSLogin', {
            title: 'Novo Orçamento',
            dadosUsuario: req.session.usuario,
            horariosBloqueados: agendamentos,
        })
    }
}

module.exports.novoOrcamento = (async(req, res, next) => {
    const dadosDoFormulario = req.body
    const { valor, idUsuario, tipoDeServico } = req.query
    const newService = await models.Servico.findOne({
        valor: {
            [Op.like]: `${valor || ''}%`,
        }
    })
    const servico = await models.Servico.findOne({
        tipoDeServico: {
            [Op.like]: `${tipoDeServico || ''}%`,
        }
    })
    const valorFront = calValorfront = () => {
        dadosDoFormulario.tamanhoImovel * (0.2 + juncao.length)
    }
    let juncao = orcamentosCadastrados.concat(dadosDoFormulario.servico)
    const resultado = calculaOrcamento(dadosDoFormulario.tamanhoImovel, newService.valor, juncao.length)
    req.body.valor = resultado
    let dataInicioAjustada = req.body.dataInicio
    dataInicioAjustada += 'T00:00:00.000Z'
    dadosDoFormulario.valor = resultado
    dadosDoFormulario.reservadoPor = req.session.usuario.idUsuario
    dadosDoFormulario.membros_idMembro = 1
    dadosDoFormulario.status = 'active'
    dadosDoFormulario.dataFinal = dataInicioAjustada
    dadosDoFormulario.horarioFinal = req.body.horarioInicio
    dadosDoFormulario.dataInicio = dataInicioAjustada
    console.log(dadosDoFormulario)
    console.log(servico.tipoDeServico)
    const reservas = await models.Reserva.create(dadosDoFormulario)
    if (!reservas) {
        res.render('orcamento')
        return
    }
    dadosDoFormulario.reservas_idReserva = reservas.idReserva
    await models.Orcamento.create(dadosDoFormulario)
    res.redirect('/')
})
module.exports.verificaDisponibilidade = async(req, res) => {
    var dataSelecionada = req.query.data
    const horariosAgendados = await models.Reserva.findAll({
        where: {
            dataInicio: dataSelecionada
        },
        attributes: ['dataInicio', 'horarioInicio']
    });
    res.send(horariosAgendados)
}

function calculaOrcamento(tamanhoImovel, numeroServicos, valor) {
    let valorTotal = tamanhoImovel * (numeroServicos * valor + 0.8)
    console.log(tamanhoImovel)
    console.log(valorTotal)
    return valorTotal
}