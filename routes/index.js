const router = require("express").Router()
const userRouter = require('./user')
const productroter = require('./product')
router.use('/users', userRouter)
router.use('/product',productroter)
module.exports = router