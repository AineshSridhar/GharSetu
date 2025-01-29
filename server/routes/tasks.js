const express = require('express');
const router = express.Router();
const Task = require('../models/TaskSchema');

router.get('/', async (req, res) => {
    try{
        const tasks = await Task.find().populate('assignedTo', 'name email');
        res.json(tasks);
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server error"});
    }
});

router.post('/', async(req, res) => {
    try{
        const {title, description, assignedTo, dueDate} = req.body
        const newTask= new Task({title, description, assignedTo, dueDate});
        await newTask.save();
        res.status(201).json({message: "Task created successfully!", task: newTask});
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server error!"});
    }
})

router.put('/:id', async(req, res) => {
    try{
        const {title, description, status, dueDate} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, {title, description, status, dueDate}, {new: true});
        res.json({message: "Task updated successfully!", task: updatedTask});
    } catch(error){
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
});

router.delete("/delete/:id", async(req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.json({message: "Task deleted successfully!"});
    } catch (error){
        console.error(error);
        res.status(500).json({message: "Server Error"})
    }
})

module.exports = router;