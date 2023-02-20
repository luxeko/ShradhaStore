'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('User', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('users',
            [
                {
                    email: 'test1@gmail.com',
                    password: '123456',
                    username: 'test 1'
                },
                {
                    email: 'test2@gmail.com',
                    password: '123456',
                    username: 'test 2'
                },
                {
                    email: 'test3@gmail.com',
                    password: '123456',
                    username: 'test 3'
                }
            ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('User', null, {});
         */
        await queryInterface.bulkDelete('users', null, {});
    }
};
