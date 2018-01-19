module.exports = function(sequelize, DataTypes) {
    return sequelize.define('attachment_type', {
        attachment_type: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
    }, {
        tableName: 'attachment_type'
    });
};
