/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_groups', {
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'user_groups'
  });
};
