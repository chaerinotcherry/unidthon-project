// models/GonggoSchedule.js
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GonggoSchedule = sequelize.define('GonggoSchedule', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    접수시작일: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    접수마감일: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    당첨자발표일: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    계약시작일: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      },
    계약마감일: {
      type: DataTypes.DATEONLY,
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

  return GonggoSchedule;
};
