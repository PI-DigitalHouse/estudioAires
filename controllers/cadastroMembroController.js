const controlador = {
    cadastroMembro: (req, res) => {
        res.render('cadastroMembro', { title: 'cadastroMembro' });
    },
    enviaInfos: (req, res) => {
        const dadosDoFormulario = req.body
        dadosSalvos.push(dadosDoFormulario)
        res.send(201);
        console.log(dadosSalvos)
        salvarObjeto(dadosSalvos)
        res.redirect('/')
    }
}





module.exports = controlador;