const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserSchema.js');
const router = express.Router();


//Login
router.post('/login', async(req, res) => {
    console.log("Received data: ", req.body);
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "Invalid email"});
        }

        const matchFound = await bcrypt.compare(password, user.password);

        if(!matchFound){
            return res.status(400).json({message: "Invalid password"});
        }

        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET, {expiresIn: '1h'}
        );

        res.json({message: "Login successful", token, role: user.role})
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
})

router.post('/register', async(req, res) => {
    console.log("Received data: ", req.body);
    const{name, age, email, username, password} = req.body;

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already registered!"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name, email, password: hashedPassword, role: "Tenant"
        });

        await newUser.save();
        res.status(201).json({message: 'User registered successfully!'});
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
});

module.exports = router;