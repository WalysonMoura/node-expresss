const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/criar',produtosController.viewForm);
router.post('/criar',produtosController.salvarForm);
router.get('/sucesso',produtosController.sucesso);
router.get('/:id/editar',produtosController.viewAllForm);
router.put('/editar',produtosController.editar)

module.exports = router;