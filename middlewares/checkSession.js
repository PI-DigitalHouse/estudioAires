module.exports=function checkSession(req,res,next){
    if(!req.session.usuario){
        res.redirect('/')
        return
    }
    next()
}

module.exports=function checkSessionMembro(req,res,next){
    if(!req.session.membro){
        res.redirect('/')
        return
    }
    next()
}


