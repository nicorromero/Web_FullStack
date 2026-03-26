const products = require('../data/products.json');

const getProducts = (req, res) => {
    res.json(products);
};

const getProductById = (req, res) => {
    const id = parseInt(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json(product);
};

const createProduct = (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ error: 'Nombre y precio son obligatorios' });
    }

    const newProduct = {
        id: products.length + 1,
        name,
        price
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};

const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id); // Obtener el ID del producto a eliminar

    const productIndex = products.findIndex(p => p.id === id); //busca el producto por id y devuelve su posición, si no lo encuentra devuelve -1
    // Si el producto no existe, devuelve un error 404
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    // Elimina el producto del array utilizando splice
    products.splice(productIndex, 1);
}

const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }

    if (name) product.name = name;
    if (price) product.price = price;

    res.json(product);
};



module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProduct,
    updateProduct
};