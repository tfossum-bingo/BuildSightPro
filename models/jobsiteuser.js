'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobsiteUser extends Model {
    static associate(models) {
      JobsiteUser.belongsTo(models.Jobsite, {
        foreignKey: 'jobsite_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      JobsiteUser.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  }
  JobsiteUser.init({
    jobsiteId: {
      type: DataTypes.INTEGER,
      field: 'jobsite_id',
      references: {
        model: 'jobsite',
        key: 'id'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'JobsiteUser',
    tableName: 'jobsite_users'
  });
  return JobsiteUser;
};