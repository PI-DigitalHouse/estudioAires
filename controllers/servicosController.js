module.exports.listServico1 = (req, res) => {
    res.render('/servico1', {
        title: 'Servico 1'
    });
}

module.exports.listServico2 = (req, res) => {
    res.render('servico2', {
        title: 'Servico 2',
        dadosUsuario: req.session.usuario
    });
}

module.exports.listServico3 = (req, res) => {
    res.render('servico3', {
        title: 'Servico 3',
        dadosUsuario: req.session.usuario
    });
}

module.exports.listServico4 = (req, res) => {
    res.render('servico4', {
        title: 'Servico 4',
        dadosUsuario: req.session.usuario
    });
}