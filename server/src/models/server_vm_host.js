/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('server_vm_host', {
    server_vm_host_server_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'servers',
        key: 'id'
      }
    },
    server_vm_vm_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'server_vm_host'
  });
};
