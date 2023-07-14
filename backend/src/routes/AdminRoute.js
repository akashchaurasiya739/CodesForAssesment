const router = require('express').Router();
const jwt = require('jsonwebtoken');
const Admin = require("../controllers/AdminController");

router.post('/login', Admin.checkAdminLogin);
router.get("/authallusers", verifyToken, (req, res) => {
    jwt.verify(req.token, "user key", (err, authData) => {
        if (err) {
            res.send({msg:"error"});
        }else {
            res.json({msg: "token found", authData});
        }
    });
});
function verifyToken(req, res, next){
    const bearerHeader = req.headers ["authorization"];
    console.log("Header: ", bearerHeader);
    if (typeof bearerHeader !== "undefined"){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }else {
        res.send({ msg:"token is not valid" });
    }
}
module.exports = router;
