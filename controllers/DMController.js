const models = require('../models');

module.exports.calendario = (req, res) => {
    res.render('DMCalendario', {
        title: 'Minha agenda',
        dadosUsuario: req.session.usuario});
}

module.exports.bloquear = (async (req, res, next) => {
  const bloqueio = req.body

  bloqueio.reservadoPor = req.session.nome
  bloqueio.aceitoPor = req.session.nome
  bloqueio.idSolicitacao = 1

  await models.Reserva.create (bloqueio)

  res.redirect('/')
});
