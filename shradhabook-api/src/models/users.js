'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            users.belongsToMany(models.roles, {
                through: 'roles_users',
                foreignKey: 'userId'
            })
        }
    }

    users.init({
        // userCode: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        username: DataTypes.STRING,
        userAvatar: DataTypes.STRING,
        gender: DataTypes.ENUM({
            values: ['male', 'female']
        }),
        birthday: DataTypes.DATEONLY,
        phoneNumber: DataTypes.STRING,
        isCustomer: DataTypes.BOOLEAN,
        tokenCreatedAt: DataTypes.DATE,
        tokenExpires: DataTypes.DATE,
        passwordResetToken: DataTypes.STRING,
        passwordResetExpires: DataTypes.DATE,
        refreshToken: DataTypes.STRING,
        verificationToken: DataTypes.STRING,
        verificationCreatedAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'users',
    });
    return users;
};