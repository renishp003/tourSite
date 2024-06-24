import express from 'express'
import { contact } from '../controllers/contactController'
const router = express.Router()

router.post('/addContact',contact.add)

export default router