import express from "express";
import { agencies } from "../controllers/agencyController";
import multer from "multer";

const router=express.Router()

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'C:/tour-test/express-debug/src/uploads')
    },
    filename:function(req,file,cb){
    

        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage})

router.post('/addAgency',upload.single('logo'),agencies.add)
router.put('/approvedBooking/:_id',agencies.approvedBooking)
// router.post('/agancyrefreshToken',agencies.refreshToken)

export default router