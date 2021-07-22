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
  const {idSolicitacao, endereco, valor, tamanhoImovel, sessaoShooting} = req.query;
  const {idUsuario, nome, email, telefone} = req.query;

  // Serviços contratados
  // Nome do cliente
  // E-mail do cliente
  // Telefone do usuario

  const resultadosJobs = await models.Orcamento.findAll({
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
      valor : {
        [Op.like]: `${valor || ''}%`
      },
      sessaoShooting : {
        [Op.like]: `${sessaoShooting || ''}%`
      },
    },
    dadosMembro : req.session.membro
  })
  console.log(resultadosJobs)
  
  res.render('dashBoardMembro_jobsFinalizados', {
    title : 'Meus jobs finalizados',
    // dadosMembro: req.session.membro
    resultadosJobs
  })
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
        title: 'Aprovações',
        dadosUsuario: req.session.usuario,
        dadosMembro: req.session.membro })
    
 })



