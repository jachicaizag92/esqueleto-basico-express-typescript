import { Router } from "express";
import { usrGet, usrPut, usrPost, usrDelete } from "../controllers/usr.controller";

/**
 * Contiene las rutas con el controlador separado
 */
const router = Router();

router.get('/example', usrGet)
router.put('/example', usrPut)
router.post('/example',usrPost )
router.delete('/example', usrDelete)

export default router
