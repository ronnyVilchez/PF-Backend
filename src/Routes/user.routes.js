import { Router } from "express";
import { users } from "../controllers/user.controller.js";

const router = Router()

router.get('/all',users)

export default router