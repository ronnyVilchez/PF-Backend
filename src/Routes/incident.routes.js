import { Router } from "express";
import { getImg, incidenUpdate, incidentAll, incidentCreate, incidentDelete, incidentFromUs, incidentId } from "../controllers/incident.controller.js";
import { upload } from "../config/multer.js";

const router = Router()

router.get('/all',incidentAll)
router.get('/:id',incidentId)
router.get('/u/:id',incidentFromUs)
router.get('/i/:name',getImg)
router.post('/',upload.array('imagenes', 3),incidentCreate)
router.patch('/:id',upload.array('imagenes', 3),incidenUpdate)
router.delete('/:id',incidentDelete)

export default router