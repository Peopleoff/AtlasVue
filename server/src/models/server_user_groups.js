/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_user_groups', {
    user_group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'user_groups',
        key: 'id'
      }
    },
    access_level_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'server_user_groups'
  });
};
