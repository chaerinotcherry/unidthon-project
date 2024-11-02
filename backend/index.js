require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models'); 

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());

const userRoutes = require('./routes/user-routes');
const houseRoutes = require('./routes/house-routes');
app.use('/users', userRoutes);
app.use('/houses', houseRoutes);
async function startServer() {
  try {
   
    await db.sequelize.sync({ force: false }); 
    console.log('Database synchronized!');

    app.listen(port, () => {
      console.log(`Server is running}`);
    });
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
}

startServer();
