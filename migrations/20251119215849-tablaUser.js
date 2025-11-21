'use strict';
const {USER_TABLE,UserSchema}=require('E:/2025-II/NODE JS/api_v1/db/userModels')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE,UserSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE)
  }
};
