import { Router } from "express";
import { createProveedor, deleteProveedor, getProveedor, getProveedores, updateProveedor } from "../controllers/proveedores.controller.js";

const router = Router();

router.get('/proveedores', getProveedores);

router.get('/proveedores/:idProveedor', getProveedor);

router.post('/proveedores', createProveedor);

router.patch('/proveedores/:idProveedor', updateProveedor);

router.delete('/proveedores/:idProveedor', deleteProveedor);

export default router;