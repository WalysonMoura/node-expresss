const express = require('express')
const mongoose = require('mogoose')

const homeRouter = require('./routes/homeRouter')
 mongoose.connect()
const app = express();


// ROTAS
app.use('/',homeRouter)

// SERVIDOR
const port = 3030
app.listen(port,(erro) => {
    if (erro) {
        console.log("Erro",port)
    } else {
        console.log(`Backend started at http://localhost:${port}/`);
    }
})

