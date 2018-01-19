/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_services', {
    server_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'servers',
        key: 'id'
      }
    },
    service_id_fk: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'services',
        key: 'id'
      }
    },
    service_port: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    service_login: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    service_password: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    tableName: 'server_services'
  });
};
