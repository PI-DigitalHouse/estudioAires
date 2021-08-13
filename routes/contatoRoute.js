const express = require('express');
const router = express.Router();
const { renderiza, postContato } = require('../controllers/contatoRouteController')

router.get('/', renderiza)

router.post('/', postContato);

module.exports = router