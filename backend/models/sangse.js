const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  const Sangse = sequelize.define('Sangse', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    gonggoId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Gonggos',
            key: 'id',
          },
          onUpdate: 'CASCADE',  
          onDelete: 'CASCADE'
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    houseName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    providedNo: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    deposit: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rent: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    facilities: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    rentalPeriod: {
        type: DataTypes.STRING,
        allowNull: true,
    }
  });

  Sangse.associate = (models) => {
    Sangse.belongsTo(models.Gonggo, { foreignKey: 'gonggoId' });
  };


  return Sangse;
};