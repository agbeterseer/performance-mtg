const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('we are at home');
});


module.exports = router;
