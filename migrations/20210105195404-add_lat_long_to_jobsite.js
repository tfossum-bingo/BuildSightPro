'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('jobsites', 'latitude', {
        type: Sequelize.FLOAT
      }),
      queryInterface.addColumn('jobsites', 'longitude', {
        type: Sequelize.FLOAT
      }),
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('jobsites', 'latitude'),
      queryInterface.removeColumn('jobsites', 'longitude')
    ])
  }
};