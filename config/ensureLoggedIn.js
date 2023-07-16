module.exports = function(req, res, next) {
    if (!req.user) return res.status(401).json("This is not the page you're looking for.")
    next();
};