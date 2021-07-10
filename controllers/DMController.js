module.exports.calendario = (req, res) => {
    res.render('DMCalendario', {
        title: 'Minha agenda',
        dadosUsuario: req.session.usuario});
}

module.exports.calendarioBloquear = (req, res) => {
  // colocar logica para bloquear calendario
}
