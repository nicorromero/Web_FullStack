const Cart = require('../models/cart.model');

const getCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCart = async (req, res) => {
    try {
        const cart = new Cart(req.body);
        await cart.save();
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCarts,
    getCartById,
    createCart,
    updateCart,
    deleteCart
};  