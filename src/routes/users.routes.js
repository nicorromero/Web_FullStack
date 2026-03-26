const express = require('express');
const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUserById
} = require('../controllers/users.controller');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUserById);

module.exports = router;

