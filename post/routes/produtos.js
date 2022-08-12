const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

router.get('/',produtosController.viewEstoque);
router.get('/adicionar',produtosController.viewProdutos);
router.post('/adicionar',produtosController.adicionarProduto);

router.get('/sucesso',produtosController.sucesso);

router.get('/:id/editarProduto',produtosController.vieweditarProduto);
router.put('/editarProduto',produtosController.editarProdutos);

module.exports = router;