module.exports=function checkSession(req,res,next){
    if(!req.session.usuario){
        res.redirect('/')
        return
    }
    next()
}
module.exports=function checkSessionOrca(req,res,next){
    if(!req.session.usuario){
        res.redirect('/orcamento')
        return
    }
    next()
}