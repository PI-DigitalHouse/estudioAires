const models = require('../models');
const session = require('express-session');
const { Op } = require('sequelize')

module.exports.calendario = (req, res) => {
    res.render('DMCalendario', {
        title: 'Minha agenda',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro});
}

module.exports.bloquear = (async (req, res, next) => {
  const bloqueio = req.body

  bloqueio.reservadoPor = req.session.usuario.idUsuario
  bloqueio.aceitoPor = req.session.usuario.idUsuario
  bloqueio.idSolicitacao = 1
 
  console.log(bloqueio)

  await models.Reserva.create (bloqueio)

  res.redirect('/')
});

module.exports.solicitacoes = (async(req,res) => {
  const {idSolicitacao, endereco, valor, tamanhoImovel, dataInicio} = req.query;

  const resultados = await models.Orcamento.findAll({
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
      // dataInicio: {
      //   [Op.like]: `${dataInicio || ''}%`
      // },
    },
    dadosMembro : req.session.membro
  })
  console.log(resultados)
  
  res.render('dashBoardMembro_jobsFinalizados', {
    title : 'Meus jobs finalizados',
    // dadosMembro: req.session.membro
    resultados
  })
})

module.exports.aprovacoes=(async(req,res)=>{
  const { idSolicitacao, endereco, tamanhoImovel, valor, horarioInicio, status } = req.query
    
     const resultados = await models.Orcamento.findAll({
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
           /*   horarioInicio: {
              [Op.like]: `${horarioInicio || ''}%`
          },  */ 
          
           /*  dataFinal: {
                [Op.like]: `${dataFinal || ''}%`
            }, */
            
            status: {
                [Op.like]: `${status || ''}%`
            },
            
            
         },
         include:[ 'reservas']
         
     }) 
     console.log(resultados.length)
     
      res.render('dashboardMembro_aprovacoes', {
        resultados,
        title: 'Aprovações',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro })
    
 })



