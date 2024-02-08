const User = require("../Model/User");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isEmailPresent = await User.findOne({ email });

    if (isEmailPresent) {
      return res
        .status(400)
        .send("User is Already Registred Please Go To Login");
    }

    const userCreated = await User.create({ name, email, password });
    return res.status(200).json({ userCreated });
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserPresent = await User.findOne({ email });

    if (!isUserPresent) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPasswordCorrect = password == isUserPresent.password ? true : false;
    if (isPasswordCorrect) {
      res.status(200).json({
        isUserPresent,
      });
    } else {
      res.status(401).json({ message: "Invalid User and Password" });
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};

module.exports = {
  register,
  loginController,
};
