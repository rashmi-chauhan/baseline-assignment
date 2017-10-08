const { User, UserEmail, UserProfile } = require('./User');
const MigrateUser = require('./User').migrate;
const { Permission } = require ('./Permission');
const MigratePermission =  require('./Permission').migrate

let Models = {
  User,
  UserEmail,
  UserProfile,
  Permission
};

let Migrations = {
  MigrateUser,
  MigratePermission
};

module.exports = {
  Models,
  Migrations
};
