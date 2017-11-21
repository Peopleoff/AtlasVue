/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('services', {
    service_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    service_description: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'services'
  });
};
