import express from 'express'
import { authMiddleware } from '../middlewares/authMiddleware'
import { bookings } from '../controllers/bookingController'

const router = express.Router()

router.post('/booking',authMiddleware,bookings.bookTour)

export default router