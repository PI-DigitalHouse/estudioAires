const models = require('../models');
const session = require('express-session');

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
  res.render('dashBoardMembro_jobsFinalizados', {
    title : 'Meus jobs finalizados',
    dadosUsuario : req.session.usuario,
    dadosMembro: req.session.membro
  })
  const jobs = await models.Solicitacao.findAll({
    where : {idSolicitacao}
  })

})

// router.get('/jobsFinalizados', checkSession, function (req, res, next){
//   res.render('dashboardMembro_jobsFinalizados', {
//       title: 'Meus jobs finalizados', 
//       jobs: array,
//       dadosUsuario: req.session.usuario })
// } )
