import express from "express"
// import { agencies } from "../controllers/agencyController"
import { admin } from "../controllers/adminController"
import { authMiddleware } from "../middlewares/authMiddleware"

const router = express.Router()

router.get('/getAgencies',authMiddleware,admin.getAllagency)
router.get('/getAprovedAgency',authMiddleware,admin.getApprovedAgency)
router.get('/getPendingAgency',authMiddleware,admin.getPendingAgencis)
router.get('/getOneAgnecy/:_id',authMiddleware,admin.getOneAgency)
router.put('/updateApprovedStatus/:_id',authMiddleware,admin.approvedAgencyRequest)
router.get("/getAllUsers",authMiddleware,admin.getAllUsers)
export default router

