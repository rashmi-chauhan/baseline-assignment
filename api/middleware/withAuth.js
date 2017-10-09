const winston = require('winston');
const jwtService = require('../services/jwt');

module.exports = function withAuth(routeHandler) {
  return async (req, res) => {
    try {
      let authorization = req.headers['authorization'] || '';
      let token = authorization.replace('Bearer ', '');
      let decoded = await jwtService.verifyToken(token);
      req.userId = decoded.userId;
      return routeHandler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({message: `Unauthorized access detected`});
    }
  }
}