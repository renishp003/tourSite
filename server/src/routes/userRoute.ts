import express from 'express';
import { users } from '../controllers/userController';

const router = express.Router();

// console.log("Users Controller: ", users);  // Add this log
router.post('/addUser', users.add);
router.post('/reSendOtp',users.reSendOtp)
router.post('/verifyOtp',users.verifyotp)
router.post('/addDetails',users.addDetails)
router.post('/login',users.login)
router.post('/refreshToken',users.refreshToken)
router.get('/getOneUser/:_id',users.getOneuser)
export default router;
