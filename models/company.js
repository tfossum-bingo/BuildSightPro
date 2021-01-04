'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.User, {
        foreignKey: 'company_id',
        as: 'users',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      Company.hasMany(models.Jobsite, {
        foreignKey: 'company_id',
        as: 'jobsites',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Company.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    website_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'companies'
  });
  return Company;
};