'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      this.belongsTo(models.Album, {foreignKey: 'album_id'})
      this.belongsTo(models.Album, {foreignKey: 'preview_id'})
    }
  }
  Photo.init({
    name: DataTypes.STRING,
    // album_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};