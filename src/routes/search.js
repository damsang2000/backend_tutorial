import express from 'express'
import searchController from '../app/controllers/SearchController.js'
const router=express.Router()

router.use('/',searchController.index)

export default router