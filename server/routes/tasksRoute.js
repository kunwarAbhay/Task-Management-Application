const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Get all tasks
router.get('/', taskController.getAllTasks);

// Create a new task
router.post('/', taskController.createTask);

// Update a task
router.patch('/:id', taskController.updateTask);

// Delete a task
router.delete('/:id', taskController.deleteTask);

module.exports = router;
