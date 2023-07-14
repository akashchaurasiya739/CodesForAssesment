const mongoose =require('mongoose');
const AdminSchema = new mongoose.Schema({
    AdminLoginId:String,
    AdminLoginPassword:String,
});

module.exports= mongoose.model(
    'admin', AdminSchema,'admins'
);