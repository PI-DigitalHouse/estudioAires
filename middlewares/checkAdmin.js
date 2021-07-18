module.exports=function checkSessionAdmin(req,res,next){
         if(!req.session.admin){
            res.redirect('/')
            return
        }
        next()
 }
    