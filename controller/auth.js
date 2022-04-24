import jwt from "jsonwebtoken";
import { isNil } from "lodash";
import config from "../config";
const AuthController = {};

AuthController.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (isNil(email) || email === "" || isNil(password) || password === "") {
      return res
        .status(400)
        .json({ error: "Email and password are required fields" });
    }
    const accessToken = jwt.sign({ email: email }, config.ACCESS_TOKEN_SECRET);

    return res.status(200).json({
      message: "Successfull",
      accessToken,
    });
  } catch (e) {
    console.log(e);
  }
};

export default AuthController;
