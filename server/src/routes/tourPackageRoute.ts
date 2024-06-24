import express from 'express'
import { tourPackages } from '../controllers/tourPackagesConroller'
import multer from 'multer'
import { authMiddleware } from '../middlewares/authMiddleware'
const router = express.Router()


const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'C:/tour-test/express-debug/src/uploads')
    },
    filename:function(req,file,cb){
    

        cb(null,file.originalname);
    }
})

const upload = multer({storage:storage})



router.post('/addPackage',upload.single('image'),tourPackages.addPackage)
router.get('/getAllPackages',authMiddleware,tourPackages.getAllPackages)
router.get('/availablePackages',authMiddleware,tourPackages.availablePackages)
export default router