const express = require('express');
const router = express.Router();

const { getSales,
    getSaleById,
    createSale,
    deleteSale
} = require('../controllers/sales.controllers');

router.get('/', getSales);
router.get('/:id', getSaleById);
router.post('/', createSale);
router.delete('/:id', deleteSale);

module.exports = router;    