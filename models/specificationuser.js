'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SpecificationUser extends Model {
    static associate(models) {
      SpecificationUser.belongsTo(models.Specification, {
        foreignKey: 'specification_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      SpecificationUser.belongsTo(models.User, {
          foreignKey: 'user_id',
          onDelete: 'cascade',
          onUpdate: 'cascade'
      })
    }
  };
  SpecificationUser.init({
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      references: {
        model: 'user',
        key: 'id'
      }
    },
    specificationId: {
      type: DataTypes.INTEGER,
      field: 'specification_id',
      references: {
        model: 'specification',
        key: 'id'
      }
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'SpecificationUser',
    tableName: 'specification_users'
  });
  return SpecificationUser;
};