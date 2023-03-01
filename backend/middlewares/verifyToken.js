const jwt = require("jsonwebtoken");

//Token verification
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorized. Missing token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err)
        return res.status(403).json({ msg: "Incorrect or expired token." });
      else {
        req.user = data;
        next();
      }
    });
  }
};

//TokenAdmin verification

const verifyTokenAdmin = (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(403).json({ msg: "Not authorized. Missing token" });

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, data) => {
      if (err)
        return res.status(403).json({ msg: "Incorrect or expired token." });
      else {
        if (!data.isAdmin) return res.status(403).json({ msg: "Not admin" });
        req.user = data;
        next();
      }
    });
  }
};

module.exports = {
  verifyToken,
  verifyTokenAdmin,
};
