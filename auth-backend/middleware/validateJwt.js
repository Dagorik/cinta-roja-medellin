const jwt = require('jsonwebtoken');
const SECRET_kEY = 'QWERTY123'

module.exports = {
    validateToken: (req,res,next) => {
        const isToken = req.headers.authorization
        if(isToken){
            if(isToken.startsWith('pr ')){
                const token = isToken.slice(3,isToken.length);
                jwt.verify(token,SECRET_kEY, (err,decode) => {
                    if(err){
                        res.status(403).send({message:'Tu token no funciona'})    
                    }else{
                        req.decode = decode
                        next();
                    }
                })
            }else{
                res.status(403).send({message:'Sufijo incorrecto'})    
            }
        }else{
            res.status(403).send({message:'Debes de mandar un token'})
        }
    }
}