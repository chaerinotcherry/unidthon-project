// models/GonggoAptNear.js
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GonggoAptNear = sequelize.define('GonggoAptNear', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    시설명: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    도보시간: {
      type: DataTypes.INTEGER, 
      allowNull: false,
    },
    gonggoAptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GonggoAptㄴ', 
        key: 'id',
      },
    },
  });

  return GonggoAptNear;
};
