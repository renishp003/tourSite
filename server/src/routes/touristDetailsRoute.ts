import express, { Request,Response } from 'express'
import {  touristDetails, upload } from '../controllers/touristDetailsController'
import { authMiddleware } from '../middlewares/authMiddleware'
const router = express.Router()

router.post('/addTourist',upload,touristDetails.addTourists)
router.get('/getAllTourists',authMiddleware,touristDetails.getAllTourist)
router.get('/gettttt',touristDetails.getTouristPackageAndAgencyWise)

export default router