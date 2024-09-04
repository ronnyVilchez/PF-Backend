import { Router } from "express";
import { userId, usersAll } from "../controllers/user.controller.js";

const router = Router()

router.get('/all',usersAll)
router.get('/:id',userId)


export default router