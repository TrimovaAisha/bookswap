const jwt = require("jsonwebtoken");

const JWT_SECRET = "super_secret_key";

module.exports = (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Нет токена",
      });
    }

    const decoded = jwt.verify(
      token,
      JWT_SECRET
    );

    req.userId = decoded.id;

    next();
  } catch {
    return res.status(401).json({
      message: "Недействительный токен",
    });
  }
};