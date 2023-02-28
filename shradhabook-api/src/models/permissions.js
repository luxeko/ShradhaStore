'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class permissions extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            permissions.belongsToMany(models.roles, {
                through: 'permissions_roles',
                foreignKey: "permissionId",
            })
        }
    }

    permissions.init({
        permissionName: DataTypes.STRING,
        description: DataTypes.STRING,
        parentId: DataTypes.INTEGER,
        keyCode: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'permissions',
    });
    return permissions;
};