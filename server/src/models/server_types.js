/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_types', {
    server_type_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    server_type_description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    server_type_color: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'server_types'
  });
};
