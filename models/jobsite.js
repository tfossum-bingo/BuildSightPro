'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobsite extends Model {
    static associate(models) {
      Jobsite.belongsTo(models.Company, {
        foreignKey: 'company_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Jobsite.init({
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    clientName: DataTypes.STRING,
    mapUrl: DataTypes.STRING,
    companyId: {
      type: DataTypes.INTEGER,
      field: 'company_id',
      references: {
        model: 'company',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Jobsite',
    tableName: 'jobsites'
  });
  return Jobsite;
};