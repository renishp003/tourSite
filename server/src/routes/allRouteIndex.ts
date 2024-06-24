import express from 'express';
import userRoute from './userRoute';
import agnecyRoute from './agencyRoute';
import adminRoute from './adminRoute'
import contactRoute from './contactRoute'
import tourRoute from './tourPackageRoute'
import bookRoute from './bookingRoute'
import touristDetailsRoute from './touristDetailsRoute'
const router = express.Router();

router.use('/user',userRoute);
router.use('/agency',agnecyRoute)
router.use('/admin',adminRoute)
router.use('/contact',contactRoute)
router.use('/tourpackege',tourRoute)
router.use('/bookPackage',bookRoute)
router.use('/tourist',touristDetailsRoute)

export default router;
