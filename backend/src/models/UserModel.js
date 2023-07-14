const mongoose =require ("mongoose");
const UserSchema = new mongoose.Schema({
    UserFullName:String,
    UserFatherName:String,
    UserEmail:String,
    UserPhone:String,
    UserPassword:String,
    UserStatus:{type:String,default:"Pending",require:true},
});

module.exports = mongoose.model(
    'user', UserSchema, 'Users'
);