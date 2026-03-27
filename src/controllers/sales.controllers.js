const Sales = require('../models/sale.model');

const getSales = async (req, res) => {
    try {
        const sale = await Sales.find();
        res.json(sale);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const getSaleById = async (req, res) => {
    try {
        const sale = await Sales.findById(req.params.id);
        res.json(sale);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSale = async (req, res) => {
    try {
        const { date, user, items, total } = req.body;

        if (!date || !user || !items || !total) {
            return res.status(400).json({ error: 'Fecha, usuario, items y total son obligatorios' });
        }

        const newSale = new Sales({
            date,
            user,
            items,
            total
        });
        await newSale.save();
        res.status(201).json(newSale);

    } catch (error) {
        res.status(500).json({ error: 'Error al crear la venta' });
    }
};

const deleteSale = async (req, res) => {
    try {
        const sale = await Sales.findByIdAndDelete(req.params.id);
        res.json(sale)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getSales,
    getSaleById,
    createSale,
    deleteSale
};      