/* jshint indent: 2 */
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user, options) {
  const SALT_FACTOR = 8;
    if(!user.changed('user_password')){
    return;
    }
    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.user_password, salt, null))
        .then(hash => {
          user.setDataValue('user_password', hash)
        })

}

module.exports = function(sequelize, DataTypes) {

   const users = sequelize.define('users', {
    user_firstname: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_lastname: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_login: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_password: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_status: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1',
      references: {
        model: 'status_types',
        key: 'id'
      }
    },
    user_group: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_groups',
        key: 'id'
      }
    },
    user_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_work_phone: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    user_mobile_phone: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  },
       {
         hooks: {
           beforeCreate: hashPassword,
           beforeUpdate: hashPassword,
           beforeSave: hashPassword,
         }
       },
       {
    tableName: 'users'
  });

   users.prototype.comparePassword = function (user_password) {
     return bcrypt.compareAsync(user_password, this.user_password)

   };

    return users
};
