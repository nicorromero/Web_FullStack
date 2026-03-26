const express = require('express');
const router = express.Router();

const { getSale,
    getSaleById,
    createSale,
    deleteSale
} = require('../controllers/sales.controller');

router.get('/', getSales);
router.get('/:id', getSaleById);
router.post('/', createSale);
router.delete('/:id', deleteSale);

module.exports = router;    