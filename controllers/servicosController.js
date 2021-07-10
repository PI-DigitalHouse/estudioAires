module.exports.listServico1 = (req, res) => {
    res.render('servicos/servico1', { 
      title: 'Servico 1'});
}

module.exports.listServico2 = (req, res) => {
    res.render('servicos/servico2', { 
      title: 'Servico 2',
      dadosUsuario: req.session.usuario});
}

module.exports.listServico3 = (req, res) => {
    res.render('servicos/servico3', { 
      title: 'Servico 3',
      dadosUsuario: req.session.usuario});
}

module.exports.listServico4 = (req, res) => {
    res.render('servicos/servico4', { 
      title: 'Servico 4',
      dadosUsuario: req.session.usuario});
}

module.exports.listServico5 = (req, res) => {
    res.render('servicos/servico5', { 
      title: 'Servico 5',
      dadosUsuario: req.session.usuario});
}


module.exports.listServico6 = (req, res) => {
    res.render('servicos/servico6', { 
      title: 'Servico 6',
      dadosUsuario: req.session.usuario});
}


