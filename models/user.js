'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Company, {
        foreignKey: 'company_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
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
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};