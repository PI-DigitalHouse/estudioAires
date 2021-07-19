module.exports=function checkSessionMembro(req,res,next){
    if(!req.session.membro){
        res.redirect('/')
        return
    }
    next()
}