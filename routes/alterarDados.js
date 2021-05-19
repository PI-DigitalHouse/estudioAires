const express = require('express');
const router = express.Router();
/*dentro dessa função eu preciso puxar os dados do usuário logado, imprimi-los no formulário de 
alteração de dados e tornar esses mesmos campos preenchidos editáveis*/ 
router.get('/', function(req, res, next){ 

    res.render('alterarDados', {usuario: {
        nome: req.session.nome
    }})
    
})
/* está dando erro pq eu não fiz a sessão nessa página. Preciso garantir que a sessão 
esteja implementada e que a sessão puxe o nome corretamente*/

module.exports = router