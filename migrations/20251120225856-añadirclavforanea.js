'use strict';
const {CLIENT_TABLE,CLIENT_SCHEMA}=require('E:/2025-II/NODE JS/api_v1/models/cliente_model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(CLIENT_TABLE,'UserID',CLIENT_SCHEMA.userid)
  },

  async down (queryInterface) {
    await queryInterface.removeColumn(CLIENT_TABLE,'UserID')
  }
};
