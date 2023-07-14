const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const SendMailFun = require("../others/SendEmail");

// Display Auth All Users
const allUsers = async(req, res) =>{
    try{
        const userData = await User.find();
        res.status(200).send(userData);
    }catch(error){
        console.log("Error: ", error);
        res.status(500).send(error);
    }
};

// Display Selected Users
const singleUserId = async (req, res) => {
    const data = req.params.uid;
    try {
        // const userData = await User.find({UserName:data});
        const userData = await User.findById(data); 
        res.status(200).json(userData);
        } catch (error) {
            console.log("Error: ",error);
            res.status(500).send(error);
        }
 };

 // User Login
 const checkUserLogin = async (req, res) => {
    const eid = req.body.UserEmail;
    const pass = req.body.UserPassword;
    try {
        const userData = await User.findOne({ UserEmail: eid, UserStatus:"active"});
        console.log("USER DATA: ", userData);
        //if (userData.length>0)
        if (userData)
        {
            bcrypt.compare(pass, userData.UserPassword, function (err, result) {
                if (err) {
                    res.status(500).json({ msg: err});
                } else {
                    if (result) {
                        // res.status(200).json({msg: "Login Done..."});
                        jwt.sign(
                            { userData },
                            "key",
                            {expiresIn: "100s" },
                            function (err, token) {
                                res.status(200).json({ token });
                            }
                            );
                    } else {
                        res.status(200).json({msg:"Login Not Done..."});
                    }
                }
            });

        } else {
            res.status(200).json({msg:"Email id not matched..."});
        }
       
        } catch (error) {
            console.log("Error: ",error);
            res.status(500).send(error);
        }
 };

 // Create User
const createUser = async (req, res)=> {
    try{
      console.log("OPASS: ", req.body.UserPassword);
      bcrypt.hash(req.body.UserPassword, 8, function(err, hashPass) {
          if(err){
              console.log("Error...", err);
          }
          else{    
              const data = {
                UserFullName: req.body.UserFullName,
                UserFatherName:req.body.UserFatherName,
                  UserEmail: req.body.UserEmail, 
                  UserPhone: req.body.UserPhone, 
                  UserPassword: hashPass, 
                  UserStatus:"active",
              };
              const result = new User(data);
              const result1 = result.save();
              res.status(201).send(result1);
             };  
              SendMailFun(req.body.UserEmail,"Reg. Mail",`Hello ${req.body.UserName} you are registered on our Portal...`);
              res.status(201).send({ msg:"Record Inserted..." });
              }
          );
      } catch (error) {
      console.log("Error: ",error);
      res.status(500).send(error);
      }
  };
 // Delete User
const deleteUser = async (req, res)=> {
    try {
        const userData = await User.findByIdAndDelete(req.params.uid);
        res.status(200).json(userData);
        } catch (error) {
            console.log("Error: ",error);
            res.status(500).send(error);
        }
};

// Update Users
const updateUser = async (req, res)=> {
    try {
        const userData = await User.findByIdAndUpdate(req.params.uid,req.body);
        res.status(200).json(userData);
        } catch (error) {
            console.log("Error: ",error);
            res.status(500).send(error);
        } 
};

module.exports = {
    allUsers,
    singleUserId,
    checkUserLogin,
    createUser,
    deleteUser,
    updateUser
}