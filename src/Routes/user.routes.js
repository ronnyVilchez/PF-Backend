import { Router } from "express";
import { usersAll } from "../controllers/user.controller.js";

const router = Router()

router.get('/all',usersAll)

export default router