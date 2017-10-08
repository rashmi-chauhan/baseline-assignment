const winston = require('winston');
const jwtService = require('../services/jwt');

module.exports = async function withAuth(routeHandler) {
  return async (req, res) => {
    try {
      winston.info('This is from withAuth middleware');
      // TODO: Uncomment once implemented
      // let authorization = req.headers['authorization'] || '';
      // let token = authorization.replace('Bearer ', '');
      // let decoded = await jwtService.verifyToken(token);
      // req.user = decoded;
      return routeHandler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({message: `Unauthorized access detected`});
    }
  }
}