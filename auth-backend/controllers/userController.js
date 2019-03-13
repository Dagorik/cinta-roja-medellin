const {newUser,findUserByEmail,validatePasswordByUser,generateTokenByUser} = require('./resolver/UserResolver');
module.exports = {
    me: (req,res) => {
        console.log(req.decode);
        res.send(req.decode);
    },
    createuser: async (req,res) => {
        const user = await newUser(req.body)
        user 
            ? res.status(201).send(user) 
            : res.status(400).send({message:'Error'})
    },
    login: async (req,res) => {
        const user = await findUserByEmail(req.body.email);
        if(user){
            const isMatchPassword = await validatePasswordByUser(user,req.body.password);
            if(isMatchPassword){
                const token = generateTokenByUser(user);
                res.send({token})
            }else{
                res.status(400).send({message:'Password incorrecto'})
            }
        }else{
            res.status(400).send({message:'Usuario no existe'})
        }
    },
    updateUser: (req,res) => {
        res.send(req.user)
    }
}