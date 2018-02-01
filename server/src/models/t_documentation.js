/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_documentation', {
    documentation_title: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    documentation_note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    documentation_last_user_updated: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    documentation_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    documentation_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1',
      references: {
        model: 'status_types',
        key: 'id'
      }
    },
    server_id: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
            model: 'servers',
            key: 'id'
        }
    }
  }, {
    tableName: 't_documentation'
  });
};
