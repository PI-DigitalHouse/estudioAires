const bcrypt = require('bcrypt'); //chamando a lib para crip de hash de cadastro
const session = require('express-session');
const fs = require('fs'); //lib para manipular arquivo do sistema operacional
const models = require('../models');
const { Op } = require('sequelize');
const servico = require('../models/servico');


let orcamentosCadastrados = [];




module.exports.renderizaOrcamento =  async (req, res, next) => {
  const {idReserva} = req.query;
  const bloqueio = await models.Reserva.findAll({
    where: {
      idReserva: {
        [Op.like]: `${idReserva || ''}%`,
      }
    }, attributes: ['horarioInicio']
  });

  console.log(JSON.stringify (bloqueio.map(data=>data.horarioInicio)))

  if (req.session.usuario) {
    res.render('orcamento', {
      title: 'Novo Orçamento',
      dadosUsuario: req.session.usuario,
      horariosBloqueados: bloqueio,
    })
  } else {
    console.log('n logado')
    res.render('orcamentoSLogin', {
      title: 'Novo Orçamento',
      dadosUsuario: req.session.usuario,
      horariosBloqueados: bloqueio,
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

console.log(typeof req.body.horarioInicio)
  req.body.dataFinal = req.body.dataInicio
  req.body.horarioFinal = req.body.horarioInicio
  let juncao = orcamentosCadastrados.concat(dadosDoFormulario.servico)

  console.log(dadosDoFormulario)
  //console.log(newService.valor)
  //console.log(dadosDoFormulario.servico)
  //console.log(juncao.length) //percorrendo o array e trazendo a quantidade de servico que tem nele


  const resultado = calculaOrcamento(dadosDoFormulario.tamanhoImovel, newService.valor, juncao.length)
  req.body.valor = resultado


  dadosDoFormulario.valor = resultado
  dadosDoFormulario.reservadoPor = req.session.usuario.idUsuario
  dadosDoFormulario.membros_idMembro = 1
  dadosDoFormulario.status = 'active'

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
  
  let valorTotal = tamanhoImovel*( numeroServicos*valor+ 0.8)
  console.log(tamanhoImovel)
  
  console.log(valorTotal)
  return valorTotal
}

