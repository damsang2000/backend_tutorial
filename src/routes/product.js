import express from 'express'
import productsController from '../app/controllers/ProductsController.js'
const router=express.Router()
router.use('/:slug',productsController.show)
router.use('/',productsController.index)
export default router