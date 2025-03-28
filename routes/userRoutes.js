const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
// This code defines the routes for user-related operations in an Express application. It imports the necessary modules and the user controller functions, then sets up the routes for creating, retrieving, updating, and deleting users. Finally, it exports the router to be used in the main application file.