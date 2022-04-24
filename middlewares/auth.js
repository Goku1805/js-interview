import { isNil } from "lodash";
import config from "../config";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers["authorization"];
    if (isNil(token)) {
      return res.status(403).json({
        error: "Access Denied. No token provided. Please login again.",
      });
    }

    token = token.replace("Bearer ", "");

    let decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET);
    if (decoded.email !== "") next();
    else {
      return res.status(403).json({
        error: "Invalid token. Please login again.",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(403).json({
      error: "Invalid token. Please login again.",
    });
  }
};
export default authMiddleware;
