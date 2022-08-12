const IndexController = {
    viewContato:(req,res) => {

        const { nome } = req.query;
        res.render('contato',{nomeUsuario: nome})
    },

    confirmarUsuario: (req,res) =>  {

        const { nome ,email} = req.query;
        res.send(`nome: ${nome}, email:${email}` )
    }

}

module.exports = IndexController;