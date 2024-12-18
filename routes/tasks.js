import express from "express"
import Task from "../models/task.js";
import sequelize from "../config/dbnonn.js";


const router = express.Router();
// get all tasks
router.get('/', async (req, res) => { 
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        const tasks = await Task.findAll();
        res.render('index', {tasks});
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// create a new task
router.post('/add-task', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        completed: req.body.completed || false,
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// get a single task by id
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


//update a task by id
router.put('/:id', async(req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        task.title = req.body.title || task.title;
        task.completed = req.body.completed || task.completed;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


export default router