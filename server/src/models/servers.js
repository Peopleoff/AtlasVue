/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('servers', {
    hostname: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    server_type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '6',
      references: {
        model: 'server_types',
        key: 'id'
      }
    },
    server_host_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    services_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_group_access: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_access: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    local_ip: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    public_ip: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    },
    domain_name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    hardware: {
      type: DataTypes.JSON,
      allowNull: true
    },
    serial_number: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    rack_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'racks',
        key: 'id'
      }
    },
    server_height: {
      type: DataTypes.INTEGER(20),
      allowNull: true
    },
    server_rack_location: {
      type: DataTypes.INTEGER(20),
      allowNull: true
    },
    server_login: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    server_password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    purchase_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    warranty_end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    server_status_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'servers'
  });
};
