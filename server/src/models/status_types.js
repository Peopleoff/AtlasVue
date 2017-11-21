/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status_types', {
    status_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    status_description: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'status_types'
  });
};
