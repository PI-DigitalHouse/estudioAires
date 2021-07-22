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
  // const usuario = await models.Usuario.findAll({
  //   where : {
  //     idUsuario : await req.session.usuario.idUsuario,
  //   },
  //   include: [
  //     'reserva'
  //   ]
  // })

  res.render('dashBoardMembro_jobsFinalizados', {
    title : 'Meus jobs finalizados',
    dadosUsuario : req.session.usuario,
    // solicitacoes,
    dadosMembro: req.session.membro
  })
  
  // const jobs = await models.Solicitacao.findAll({
  //   where : {idSolicitacao}
  // })
})

module.exports.aprovacoes=(async(req,res)=>{
  const { idSolicitacao, endereco, tamanhoImovel, valor, nomeContato, telefoneContato, horarioInicio, status, email } = req.query
    
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
             nomeContato: {
              [Op.like]: `${valor || ''}%`
          },
          telefoneContato: {
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
         include:
           {
             model: models.Reserva,
             as: 'reservas',
             attributes:[
               'status',
               'horarioInicio'
                            
            ],
            include:
              {
                model: models.Usuario,
                as:'usuarios',
                attributes:[
                  'email'

                ]
              }
             
            },
             
          
         
     }) 
     console.log(resultados.length)
     
      res.render('dashboardMembro_aprovacoes', {
        resultados,
        title: 'Minha Agenda',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro })
    
 })



