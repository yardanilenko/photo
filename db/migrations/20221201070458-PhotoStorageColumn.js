'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'Photos',
        'storage_file_name',{
          type: Sequelize.STRING,
        })
  },

  async down (queryInterface) {
    queryInterface.removeColumn(
        'Photos',
        'storage_file_name')
  }
};