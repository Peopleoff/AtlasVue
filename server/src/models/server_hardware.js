/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('server_hardware', {
        server_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'servers',
                key: 'id'
            }
        },
        processor_1: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        processor_2: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        memory: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        storage_1: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        storage_2: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        storage_3: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        storage_4: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        network_1: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        network_2: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        operating_system: {
            type: DataTypes.STRING(250),
            allowNull: true
        },
        warranty_start_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        warranty_end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },

    }, {
        tableName: 'server_hardware'
    });
};
