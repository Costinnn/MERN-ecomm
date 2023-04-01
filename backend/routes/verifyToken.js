const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader;
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
      if (err) {
        return res.status(403).json("Token not valid");
      }
      req.user = data;
      next();
    });
  } else {
    return res.status(401).json("Not authenticated");
  }
};

const verifyTokenAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("Not allowed to do that");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("Not allowed to do that");
    }
  });
};

module.exports = { verifyToken, verifyTokenAuth, verifyTokenAndAdmin };
