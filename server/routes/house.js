const express = require('express');
const User = require("../models/UserSchema");
const House = require("../models/HouseSchema");
const router = express.router();

router.get('/members', async (req, res) => {
    const {houseId} = req.query;
    const userId = req.user.id;
    try{
        const house = await House.findById(houseId);
        const user = await User.find(userId);

        if(!house||!user){
            return res.status(400).json({message: `House or user not found`});
        }
        
        res.status(200).json({message: 'User added to house successfully!'});
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'})
    }
});

router.post('/add-user-to-house', async (req, res) => {
    const {userId, houseId} = req.body;
    
    try{
        const house = await House.findById(houseId);
        const user = await User.findById(userId);

        if(!house||!user){
            return res.status(400).json({message: `House or user not found`});
        }
        
        house.users.push(user._id);
        await house.save();

        house.users.push(user._id);
        await house.save();

        user.house = house._id 
        await user.save();
        
        res.status(200).json({message: 'User added to house successfully!'});
    } catch (error){
        console.error(error);
        res.status(500).json({message: 'Server error'})
    }
});

router.delete("/remove-user-from-house", async(req, res) => {
    const {userId, houseId} = req.body;
    try{
        const house = await House.findById(houseId);
        const user = await User.findById(userId);

        if (!house || !user){
            return res.status(400).json({message: 'House or user not found'});
        }

        house.users = house.users.filter(userId => userId.toString() !== user._id.toString());
        await house.save();

        user.house = null;
        await user.save();
        res.status(200).json({message: 'User removed successfully!'});
    } catch (error){
        res.status(500).json({message: 'Server error'});
    }
});

module.exports = router();
