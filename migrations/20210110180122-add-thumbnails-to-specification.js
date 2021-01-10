'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('specifications', 'smallThumbnailUrl', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('specifications', 'largeThumbnailUrl', {
        type: Sequelize.STRING
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('specifications', 'smallThumbnailUrl'),
      queryInterface.removeColumn('specifications', 'largeThumbnailUrl')
    ])
  }
};
