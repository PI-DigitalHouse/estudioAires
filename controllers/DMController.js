const models = require('../models');
const session = require('express-session');

module.exports.calendario = (req, res) => {
    res.render('DMCalendario', {
        title: 'Minha agenda',
        dadosUsuario: req.session.usuario});
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
