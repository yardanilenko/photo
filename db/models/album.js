'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      this.hasMany(models.Photo, {foreignKey: 'album_id' })
      this.belongsTo(models.User, {foreignKey: 'user_id'})
      this.hasMany(models.Access, {foreignKey: 'album_id' })
      // this.hasOne(models.Photo, {foreignKey: 'preview_id' })
    }
  }
  Album.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    preview_id: DataTypes.INTEGER,
    isPublic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};