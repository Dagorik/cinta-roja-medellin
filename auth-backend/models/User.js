const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const schemaUser = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    full_name:{
        type: String,
        required: true
    }
},{timestamps:true});


schemaUser.pre('save',function(next){
    const user = this;
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err,salt){
        if (err) return next(err);
        bcrypt.hash(user.password,salt, function(err,hash){
            if (err) return next(err);
            user.password = hash
            next();
        })
    });
});

schemaUser.methods.comparePassword = function(candidatePassword,cb){
    bcrypt.compare(candidatePassword,this.password, function(err,isMatch){
        if (err) return cb(err);
        cb(null,isMatch);
    });
}

const User = mongoose.model('User',schemaUser);

module.exports = {
    User
}