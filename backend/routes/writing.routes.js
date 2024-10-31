import { Router } from "express";
import { updateStory,getChapters } from "../controllers/writingControllers.js";



const router = Router()


router.post('/newWriting',updateStory)
router.post('/getChapters',getChapters)



export default router