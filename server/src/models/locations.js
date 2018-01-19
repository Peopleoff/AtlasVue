/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locations', {
    name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    contact_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    contact_phone: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'locations'
  });
};
