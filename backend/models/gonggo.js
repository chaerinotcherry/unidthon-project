const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Gonggo = sequelize.define('Gonggo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    provider: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    applicationPeriod: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    announcementDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    contractPeriod: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });

  return Gonggo;
};