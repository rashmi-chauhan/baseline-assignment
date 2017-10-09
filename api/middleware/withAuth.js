const winston = require('winston');
const jwtService = require('../services/jwt');
const { Helpers } = require('../models');

module.exports = function withAuth(routeHandler) {
  return async (req, res) => {
    try {
      let authorization = req.headers['authorization'] || '';
      let token = authorization.replace('Bearer ', '');
      let decoded = await jwtService.verifyToken(token);
      if (decoded.refresh_token) {
        throw new Error(`Invalid token`);
      }
      let permissions = await Helpers.executeRawQuery('findUserPermissions', {userId: decoded.userId});
      req.user = {
        identifier: decoded.userId,
        permissions
      };
      return routeHandler(req, res);
    } catch (error) {
      return res
        .status(401)
        .json({message: `Unauthorized access detected`});
    }
  }
}