'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
        'Photos',
        'album_id',{
            type: Sequelize.INTEGER,
            references: {
              model: 'Albums',
              key: 'id'
            },
            onDelete: 'cascade',
            onUpdate: 'cascade'
        })
  },

  async down (queryInterface) {
    queryInterface.removeColumn(
        'Photos',
        'Album_id')
  }
};