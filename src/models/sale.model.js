const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },

        quantity: { type: Number, required: true },

        price: { type: Number, required: true },

        subtotal: { type: Number, required: true }
    }],

    total: { type: Number, required: true, min: 0 },

    status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' }
});

module.exports = mongoose.model('Sale', SaleSchema);