'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('specifications', 'smallThumbnaillUrl', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('specifications', 'largeThumbnaillUrl', {
        type: Sequelize.STRING
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('smallThumbnaillUrl', 'smallThumbnaillUrl'),
      queryInterface.removeColumn('largeThumbnaillUrl', 'largeThumbnaillUrl')
    ])
  }
};
