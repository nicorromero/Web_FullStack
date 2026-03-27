const User = require('../models/user.model');

//clase conectada a mongo

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el usuario' });
    }
};

const createUser = async (req, res) => {
    try {
        const nuevoUser = new User(req.body);
        await nuevoUser.save();
        res.json(nuevoUser);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
};

const updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
};


module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUserById
};

