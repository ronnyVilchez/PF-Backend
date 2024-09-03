import { Router } from "express";
import { incidentAll } from "../controllers/incident.controller.js";

const router = Router()

router.get('/all',incidentAll)

export default router