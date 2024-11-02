const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    currentJob: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    haveHouse: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    monthlyIncome: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    haveWorked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    currentLoc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    asset: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    subscriptionNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    carPrice: {
      type: DataTypes.ENUM('없음', '0~ 3683만원', '3683 ~ 3708만원', '3708만원 이상' ),
      allowNull: true,
    },
    parentCarPrice: {
      type: DataTypes.ENUM('없음', '0~ 3683만원', '3683 ~ 3708만원', '3708만원 이상' ),
      allowNull: true,
    },
    parentHousePrice: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    parentMonthlyIncome: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    favoriteLoc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    favMaxDeposit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    favMinArea: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    favMaxArea: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  return User;
};
