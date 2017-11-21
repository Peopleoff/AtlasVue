/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('racks', {
    rack_height: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rack_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    rack_location: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'locations',
        key: 'id'
      }
    }
  }, {
    tableName: 'racks'
  });
};
