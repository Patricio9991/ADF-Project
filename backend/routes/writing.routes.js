import { Router } from "express";
import { updateStory } from "../controllers/writingControllers.js";



const router = Router()


router.post('/newWriting',updateStory)


export default router