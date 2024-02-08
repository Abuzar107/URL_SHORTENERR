const { register, loginController } = require("../controllers/auth-controller");

const router = require("express").Router();

router.post("/signup", register);
router.post("/login", loginController);

module.exports = router;
