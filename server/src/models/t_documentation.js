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
    documentation_user_created: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    documentation_date_created: {
      type: DataTypes.DATEONLY,
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
    documentation_last_updated_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
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
    }
  }, {
    tableName: 't_documentation'
  });
};
