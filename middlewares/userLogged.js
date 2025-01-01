const userLoggerd = (req, res,next)=>{
    let isLoged = true;
    if(!isLoged){
        return res.status(401).json({'mesagge':"Usuario no logeado"})
    }

    next()
}
module.exports= userLoggerd