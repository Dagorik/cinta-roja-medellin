const {User} = require('../models/User');
module.exports = {
    isUserByEmail: async (req,res,next) => {
        const user = await User.findOne({email:req.params.email})
        if(user){
            req.user = user
            next();
        }else{
            res.status(404).send({message:'User not found'})
        }
    }
}