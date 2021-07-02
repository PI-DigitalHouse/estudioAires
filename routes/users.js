var express = require('express');
const { renderizaUsers } = require('../controllers/usersController');
var router = express.Router();

/* GET users listing. */
router.get('/', renderizaUsers)
module.exports = router;
