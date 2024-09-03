import { Router } from "express";
import { commentstAll } from "../controllers/comment.controller.js";

const router = Router()

router.get('/all',commentstAll)

export default router