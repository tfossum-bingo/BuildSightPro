'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specification extends Model {

    static associate(models) {
      Specification.belongsTo(models.Jobsite, {
        foreignKey: 'jobsite_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      Specification.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      Specification.hasMany(models.SpecificationUser, {
        foreignKey: 'specification_id',
        as: 'specification_users',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Specification.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    attachmentUrl: DataTypes.STRING,
    smallThumbnaillUrl: DataTypes.STRING,
    largeThumbnaillUrl: DataTypes.STRING,
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
    modelName: 'Specification',
    tableName: 'specifications'
  });
  return Specification;
};