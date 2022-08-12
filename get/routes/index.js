var express = require('express');
var router = express.Router();

const IndexController = require('../controllers/IndexController')

/* ROTAS GET . */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/contato',IndexController.viewContato);
router.get('/confirmarUsuario',IndexController.confirmarUsuario);

module.exports = router;
