module.exports=function checkSession(req,res,next){
    if(!req.session.usuario){
        res.redirect('/')
        return
    }
    next()
}
module.exports=function checkSessionOrcamento(req,res,next){
    if(!req.session.usuario){
        res.redirect('/orcamento/novo')
        return
    }
    next()
}
