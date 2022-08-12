const { editar } = require("../../get/controllers/produtosController");

const produtosController = {
    viewEstoque: (req,res) => {
        res.send("Estoque de produtos");
    },
    viewProdutos:(req,res) => {
        res.render('produtos')
    },
    adicionarProduto:(req,res) => {
        res.redirect('/produtos/sucesso');
    },
    sucesso:(req,res) => {
        res.render('sucesso');
    },
    vieweditarProduto: (req,res) => {
        const {id} = req.body;

        const produtos = [
            {id:1,nome:"geladeira",preco:2000},
            {id:2,nome:"celular",preco:1500}
        ];

        res.render('editarProdutos',{
            produto: produtos[id]
        })
    },
    editarProdutos: (req,res) => {
        const { nomeProduto,nomePreco } = req.body;
        res.send("o produto: "+nomeProduto +"com o preco"+ nomePreco +" foi alterado com sucesso")
    }
    
}

module.exports = produtosController;