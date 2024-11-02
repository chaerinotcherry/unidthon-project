// models/GonggoApt.js
const { Sequelize, DataTypes, FLOAT } = require('sequelize');

module.exports = (sequelize) => {
  const GonggoApt = sequelize.define('GonggoApt', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      },
    시도군구: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    주택명: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    평수: {
      type: DataTypes.FLOAT,
      allowNull: false,
      },

    공급호수: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    보증금: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    월세: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    평면도_object_key: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    주소: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    임대기간: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    재계약가능최대횟수: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    gonggoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Gonggos', 
        key: 'id',
      },
    },
  });

    
GonggoApt.associate = (models) => {
    GonggoApt.hasMany(models.GonggoAptNear, {
      foreignKey: 'gonggoAptId', 
      as: '단지 주변 시설', 
    });
  };
    
  return GonggoApt;
};
