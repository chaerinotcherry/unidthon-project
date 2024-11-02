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
        res.status(200).json({ message: 'Logged in'});
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error Detected', error: error });
    }
});

module.exports = router;
