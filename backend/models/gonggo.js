const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Gonggo = sequelize.define('Gonggo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    공고명: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    주관사: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    공고유형: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    공고링크: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
  });

  Gonggo.associate = (models) => {
    Gonggo.hasOne(models.GonggoSchedule, {
      foreignKey: 'gonggoId',
      as: '스케줄', 
    });

    Gonggo.hasMany(models.GonggoApt, {
      foreignKey: 'gonggoId', 
      as: '정보', 
    });
  };

  return Gonggo;
};
