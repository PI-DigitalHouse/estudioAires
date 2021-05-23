var express = require('express');
const {listServico1, listServico2, listServico3, listServico4, listServico5, listServico6} = require('../controllers/servicosController');
var router = express.Router();

/* GET serviço 1 */
router.get('/servico1', listServico1);

/* GET serviço 1 */
router.get('/servico2', listServico2);

/* GET serviço 1 */
router.get('/servico3', listServico3);

/* GET serviço 1 */
router.get('/servico4', listServico4);

/* GET serviço 1 */
router.get('/servico5', listServico5);

/* GET serviço 1 */
router.get('/servico6', listServico6);

module.exports = router;