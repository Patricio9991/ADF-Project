import {Router} from 'express'
import { registerNewUser,loginUserData } from '../controllers/user.controllers.js'
import {encryptUserPassword } from '../middlewares/encryptData.js'
import { findDuplicate } from '../middlewares/findDuplicate.js'

const router = Router()

router.post("/register",findDuplicate,encryptUserPassword,registerNewUser)
router.post('/login',loginUserData)

export default router