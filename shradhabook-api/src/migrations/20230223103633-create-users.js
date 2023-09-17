'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            email: {
                unique: true,
                type: Sequelize.STRING,
                allowNull: false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            userAvatar: {
                type: Sequelize.STRING,
            },
            gender: {
                type: Sequelize.ENUM,
                values: ['male', 'female'],
            },
            birthday: {
                type: Sequelize.DATEONLY,
            },
            phoneNumber: {
                type: Sequelize.STRING,
            },
            isCustomer: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 1
            },
            tokenCreatedAt: {
                type: Sequelize.DATE,
            },
            tokenExpires: {
                type: Sequelize.DATE,
            },
            passwordResetToken: {
                type: Sequelize.STRING,
            },
            passwordResetExpires: {
                type: Sequelize.DATE,
            },
            refreshToken: {
                type: Sequelize.STRING,
            },
            verificationToken: {
                type: Sequelize.STRING,
            },
            verificationCreatedAt: {
                type: Sequelize.DATE,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                onUpdate: Sequelize.literal("CURRENT_TIMESTAMP")
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('users');
    }
};