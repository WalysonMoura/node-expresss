const express = require('express');
const router = express.Router();

// ROTAS
router.get('/',(req,res) => {
    res.send("hello word!")
})


module.exports = router;