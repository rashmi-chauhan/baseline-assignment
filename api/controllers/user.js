const withAuth = require('../middleware/withAuth');
const jwtService = require('../services/jwt');
const models = require('../models');
const { UserProfile } = require('../models').Models;

module.exports = {
  profile: withAuth(profile),
  permissions: withAuth(permissions)
};

async function profile(req, res) {
  try {
    let authorization = req.headers['authorization'] || '';
    let token = authorization.replace('Bearer ', '');
    let decoded = await jwtService.verifyToken(token);

    let user = await User.findOne({
      where: { id: decoded.userId }
    });

    let userProfile = await UserProfile.findOne({
      where: { id: user.user_profile_id }
    });
    return res.json({
      first_name: userProfile.first_name,
      last_name: userProfile.last_name
    });
  } catch (error) {
    return res
      .status(401)
      .json({ message: error.message || `Unauthorized access detected` });
  }
}

async function permissions(req, res) {
  return res.json({ ...req.user });
}
