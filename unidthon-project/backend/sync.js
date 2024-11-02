const db = require('./models');

async function syncDatabase() {
  try {
    await db.sequelize.sync({ force: true });
    console.log('Database synchronized!');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  } finally {
    await db.sequelize.close();
  }
}

syncDatabase();