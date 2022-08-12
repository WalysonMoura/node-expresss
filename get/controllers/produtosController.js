const { render } = require("../app");

const produtosController = {
    viewForm:(req,res) => {
        res.render('produtos')
    },

    salvarForm: (req,res) => {
       
        res.redirect('/produtos/sucesso');
    },
    sucesso: (req,res) => {
       return res.render('sucesso');
    },

    viewAllForm: (req,res) => {
        const { id } = req.params;

        const produtos = [
            {id:1,nome:"geladeira",preco:2000},
            {id:2,nome:"celular",preco:1500}
        ];

        res.render('editarProdutos',{
            produtos:produtos[id]
        });   
    },

    editar:(req,res) => {
         const {nomeProduto, precoProduto} = req.body;
        res.send("você editou as informacoes do produto",nomeProduto)
    }
}

module.exports = produtosController;