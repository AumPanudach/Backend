const router = require('express').Router()

router.get('/',(req,res) =>{
    res.send("This is product")
})

module.exports = router