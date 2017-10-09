const bcrypt = require('bcrypt');
const {promisify} = require('util');
const jwtService = require('../services/jwt');
const compare = promisify(bcrypt.compare);
const {User, UserEmail} = require('../models').Models;

module.exports = {
  login
};

async function login(req, res) {
  let userEmail = await UserEmail.findOne({
    where: { email: req.body.email, is_primary: true }
  });

  if (!userEmail) {
    return res
      .status(401)
      .json({message: `Unauthorized access`});
  }

  let user = await User.findOne({
    where: { id: userEmail.user_id }
  });
  
  let validPassword = await compare(req.body.password, user.password);
  if (!validPassword) {
    return res
    .status(401)
    .json({message: `Unauthorized access`});
  }

  let {accessToken, refreshToken} = await jwtService.sign({
    userId: user.id
  });

  return res.json({
    access_token: accessToken,
    refresh_token: refreshToken,
    token_type: 'Bearer'
  });
}
