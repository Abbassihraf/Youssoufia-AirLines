exports.logoutUser = (req, res)=>{
    req.session.destroy((err)=>{
        if(err) throw err;
        res.redirect('/')
    })
    
}