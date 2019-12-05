module.exports = function(req, res, next) {
  if (!req.user) {
    res.status(401).json({
      message: "Unauthorized",
      status: 401
    });
  } else {
    next();
  }
};
