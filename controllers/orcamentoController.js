const bcrypt = require('bcrypt'); //chamando a lib para crip de hash de cadastro
const session = require('express-session');
const fs = require('fs'); //lib para manipular arquivo do sistema operacional
const models = require('../models');
const { Op } = require('sequelize');
const servico = require('../models/servico');
const { response } = require('express');


let orcamentosCadastrados = [];

module.exports.renderizaOrcamento = async (req, res, next) => {
  const { idReserva } = req.query;

  //datas e horarios bloqueados
  const bloqueios = await models.Reserva.findAll({
    where: {
      idReserva: {
        [Op.like]: `${idReserva || ''}%`,
      }
    }, attributes: ['dataInicio', 'horarioInicio']
  });
  //para usar no front
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

module.exports.novoOrcamento = (async (req, res, next) => {

  const dadosDoFormulario = req.body
  const { valor, idUsuario } = req.query

  const newService = await models.Servico.findOne({
    valor: {
      [Op.like]: `${valor || ''}%`,
    },

  })
  const valorFront = calValorfront = () => {
    dadosDoFormulario.tamanhoImovel * (0.2 + juncao.length)
  }

  let juncao = orcamentosCadastrados.concat(dadosDoFormulario.servico)


  //console.log(newService.valor)
  //console.log(dadosDoFormulario.servico)
  //console.log(juncao.length) //percorrendo o array e trazendo a quantidade de servico que tem nele

  const resultado = calculaOrcamento(dadosDoFormulario.tamanhoImovel, newService.valor, juncao.length)
  req.body.valor = resultado

  //ajusta formato data - > COLOCAR += O TEXTO
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
  const reservas = await models.Reserva.create(dadosDoFormulario)

  if (!reservas) {
    res.render('orcamento')
    return
  }

  dadosDoFormulario.reservas_idReserva = reservas.idReserva

  await models.Orcamento.create(dadosDoFormulario)

  res.redirect('/') //redireciiona para home


})


function calculaOrcamento(tamanhoImovel, numeroServicos, valor) {

  let valorTotal = tamanhoImovel * (numeroServicos * valor + 0.8)
  console.log(tamanhoImovel)

  console.log(valorTotal)
  return valorTotal
}

module.exports.verificaDisponibilidade = async (req, res) => {
  var dataSelecionada = req.query.data
  
  const horariosAgendados = await models.Reserva.findAll({
    where:{
       dataInicio: dataSelecionada
      }, attributes: ['dataInicio', 'horarioInicio']
  });

  res.send(horariosAgendados)

}