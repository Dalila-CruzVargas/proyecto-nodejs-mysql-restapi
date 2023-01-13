import { Router } from "express";
import { getVendedores, createVendedor, updateVendedor, deleteVendedor, getVendedor } from "../controllers/vendedores.controller.js";

const router = Router();

router.get('/vendedores', getVendedores);

router.get('/vendedores/:idVendedor', getVendedor);

router.post('/vendedores', createVendedor);

router.patch('/vendedores/:idVendedor', updateVendedor);

router.delete('/vendedores/:idVendedor', deleteVendedor);

export default router;