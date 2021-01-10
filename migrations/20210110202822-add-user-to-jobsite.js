'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('jobsites', 'user_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('jobsites', 'user_id')
    ])
  }
};
