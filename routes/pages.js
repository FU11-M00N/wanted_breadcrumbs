const express = require('express');
const router = express.Router();

const { getPages } = require('../controllers/pages');

router.get('/page/:id', getPages);

module.exports = router;
