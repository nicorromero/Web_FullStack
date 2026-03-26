const sales = require('../data/sales.json');

const getSales = (req, res) => {
    res.json(sales);
};

const getSaleById = (req, res) => {
    const id = parseInt(req.params.id);

    const sale = sales.find(s => s.id === id);

    if (!sale) {
        return res.status(404).json({ error: 'Venta no encontrada' });
    }

    res.json(sale);
};
//LISTO
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

const deleteSale = (req, res) => {
    const id = parseInt(req.params.id); // Obtener el ID de la venta a eliminar

    const saleIndex = sales.findIndex(s => s.id === id); //busca la venta por id y devuelve su posición, si no lo encuentra devuelve -1
    // Si la venta no existe, devuelve un error 404
    if (saleIndex === -1) {
        return res.status(404).json({ error: 'Venta no encontrada' });
    }
    // Elimina la venta del array utilizando splice
    sales.splice(saleIndex, 1);
}


module.exports = {
    getSales,
    getSaleById,
    createSale,
    deleteSale
};      