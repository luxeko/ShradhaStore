'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class roles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            roles.belongsToMany(models.users, {
                through: 'roles_users',
                foreignKey: "roleId",
            })
            roles.belongsToMany(models.permissions, {
                through: 'permissions_roles',
                foreignKey: "roleId",
            })
        }
    }

    roles.init({
        roleName: DataTypes.STRING,
        description: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'roles',
    });
    return roles;
};