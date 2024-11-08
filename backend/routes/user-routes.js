const db = require('../models'); 
const User = db.User; 
const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const newUser = await User.create({ 
            username: username,
            password: password
        });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
           message: 'Success'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Detected' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            where: {
                username: username,
                password: password
            } 
        });

        if (!user) {
            return res.status(401).json({ message: 'Wrong Username or Password' });
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({ message: 'Logged in'});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Detected', error: error });
    }
});

router.get('/profile', async (req, res) => {
    
    res.status(200).json({
        nickname: '유니드',
        username: 'Unid_2024',
        phonenumber: '010-1234-5678'
    });
});
router.get('/myinfo', async (req, res) => {
    const user = await User.findByPk(1);
    console.log(user);
    res.status(200).json({
        birthYear: user.birthYear,
        currentJob: user.currentJob,
          haveHouse: user.haveHouse,
          monthlyIncome: user.monthlyIncome,
          haveWorked: user.haveWorked,
          currentLoc: user.currentLoc,
          asset: user.asset,
          subscriptionNo: user.subscriptionNo,
          carPrice: user.carPrice
    })
});

router.put('/myinfo', async (req, res) => {
    const {birthYear,
        currentJob,
          haveHouse,
          monthlyIncome,
          haveWorked,
          currentLoc,
          asset,
          subscriptionNo,
          carPrice} = req.body;
    const user = await User.findOne({ where: { id: 1 } });
        console.log(user);
user.birthYear = birthYear;
user.currentJob = currentJob;
user.haveHouse =  Boolean(haveHouse);
user.monthlyIncome = monthlyIncome;
user.haveWorked =  Boolean(haveWorked);
user.currentLoc = currentLoc;
user.asset = asset;
user.subscriptionNo = subscriptionNo;
user.carPrice = carPrice;
  await user.save();
  console.log(user);
  res.status(200).json({ message: '수정 성공' });
});

router.get('/filter', async (req, res) => {
    const user = await User.findByPk(1);
    console.log(user);
    res.status(200).json({
          parentCarPrice: user.parentCarPrice,
          parentHousePrice: user.parentHousePrice,
          parentMonthlyIncome: user.parentMonthlyIncome
    })
});

router.put('/filter', async (req, res) => {
    const {
          parentCarPrice,
          parentHousePrice,
          parentMonthlyIncome} = req.body;
    const user = await User.findOne({ where: { id: 1 } });
        console.log(user);
user.parentCarPrice = parentCarPrice;
 user.parentHousePrice = parentHousePrice;
 user.parentMonthlyIncome = parentMonthlyIncome;
  await user.save();
  console.log(user);
  res.status(200).json({ message: '수정 성공' });
});

router.get('/preference-filter', async (req, res) => {
    const user = await User.findOne({ where: { id: 1 } });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
          favoriteLoc: user.favoriteLoc,
          favMaxDeposit: user.favMaxDeposit,
          favMinArea: user.favMinArea,
          favMaxArea: user.favMaxArea
    })
});

router.put('/preference-filter', async (req, res) => {
    const {
          favoriteLoc,
          favMaxDeposit,
          favMinArea,
          favMaxArea } = req.body;
    const user = await User.findOne({ where: { id: 1 } });
        console.log(user);
 user.favoriteLoc = favoriteLoc;
 user.favMaxDeposit = favMaxDeposit;
 user.favMinArea = favMinArea;
user.favMaxArea = favMaxArea;

  await user.save();
    console.log(user);
    res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ message: '수정 성공' });
});


module.exports = router;
