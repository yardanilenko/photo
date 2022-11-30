'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: 'user_id'})
      this.belongsTo(models.Album, {foreignKey: 'album_id'})
    }
  }
  Access.init({
    album_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Access',
  });
  return Access;
};