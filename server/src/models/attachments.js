module.exports = function(sequelize, DataTypes) {
    return sequelize.define('attachments', {
        attachment_type_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'attachment_type',
                key: 'id'
            }
        },
        attachment_name: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        attachment_path: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        attachment_description: {
            type: DataTypes.STRING(250),
            allowNull: true,
        },
        server_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'servers',
                key: 'id'
            }
        },
        attachment_user_created: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        attachment_status_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'status_types',
                key: 'id'
            }
        }

    }, {
        tableName: 'attachments'
    });
};
