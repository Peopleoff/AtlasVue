/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let j_documentation_server_id = sequelize.define('j_documentation_server_id', {
    documentation_server_documentation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 't_documentation',
        key: 'id'
      }
    },
    documentation_server_server_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'servers',
        key: 'id'
      }
    }
  }, {
    tableName: 'j_documentation_server_id'
  });

    return j_documentation_server_id
};
