const jwt = require("jsonwebtoken");
const env = require("../environments/environment");


exports.generateJwtToken = (req, expiresIn) => {
  try {
    const payload = {};
    payload['user'] = req;
    return jwt.sign(payload, env.JWT_SECRET_KEY, { expiresIn });
  } catch (error) {
    return error;
  }
};