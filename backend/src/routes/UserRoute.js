const router = require('express').Router();
const User = require("../controllers/UserController");
router.get('/', User.allUsers);
router.get("/authallusers", verifyToken, (req, res) => {
    jwt.verify(req.token, "key", (err, authData) => {
        console.log("authData: ", authData);
        if (err) {
            res.send({msg:"error"});
        }else {
            res.json({msg: "token found", authData});
        }
    });
});
router.post('/', User.createUser );
router.post('/login', User.checkUserLogin );
router.delete('/:uid', verifyToken, User.deleteUser);
router.put('/:uid', verifyToken, User.updateUser);

function verifyToken(req, res, next){
    const bearerHeader = req.headers["authorization"];
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
// router.post('/',User.createUser);
// router.delete('/:uid',User.deleteUser);
// router.put('/:uid',User.updateUser);

module.exports =router;
