const Admin = require("..//models/AdminModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Admin Login
const checkAdminLogin = async (req, res) => {
    const aid = req.body.AdminLoginId;
    const apass = req.body.AdminLoginPassword;
    try {
        const adminData = await Admin.findOne({AdminLoginId:aid});
        console.log("ADMIN DATA: ", adminData);
        if (adminData)
        {
            bcrypt.compare(apass, adminData.AdminLoginPassword, function (err, result) {
                if (err) {
                    res.status(500).json({ msg: err});
                } else {
                    if (result) {
                        jwt.sign(
                            { adminData },
                            "admin secretkey",
                            {expiresIn: "100m" },
                            function (err, token) {
                                res.status(200).json({ token });
                            }
                            );
                    } else {
                        res.status(200).json({msg:"Admin Login ID not Found..."});
                    }
                }
            });
        } else {
            res.status(200).json({msg:"Login ID not matched..."});
        }
       
        } catch (error) {
            console.log("Error: ",error);
            res.status(500).send(error);
        }
 };
module.exports = {
    checkAdminLogin,
}