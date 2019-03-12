const {User} = require('../../models')
const jwt = require('jsonwebtoken');
const SECRET_kEY = 'QWERTY123'

module.exports = {
    newUser: (user) => {
        return new Promise((resolve,reject) => {
            const newUser = User(user);
            newUser.save((err,user) => {
                err 
                ? reject(false)
                : resolve(user)
            });
        });
    },
    findUserByEmail: (email) => {
        return User.findOne({email}).exec()
        .then((user) => {
            return user
        }).catch((err) => {
            return false
        });
    },
    validatePasswordByUser: (user,password) => {
        return new Promise((resolve,reject) => {
            user.comparePassword(password, (err,isMatch) => {
                if (err) reject(false)
                resolve(isMatch)
            });
        })
    },
    generateTokenByUser:(user)=>{
        const userPayload = {
            id:user._id,
            email:user.email,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
        }
        return jwt.sign(userPayload,SECRET_kEY);
    }
}