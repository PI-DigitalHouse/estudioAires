const { Router } = require('express');
const express = require('express');
const router = express.Router();
const fs = require('fs')
const {renderiza, postContato} = require('../controllers/contatoRouteController')


router.get('/', renderiza)

router.post('/', postContato);

module.exports = router