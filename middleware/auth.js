exports.auth = (req, res, next)=>{
    req.session.userId ? next() : res.redirect('/login')
    
}