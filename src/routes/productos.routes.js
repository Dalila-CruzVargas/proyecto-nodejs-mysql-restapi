import { Router } from "express";
import { createProducto, deleteProducto, getProducto, getProductos, updateProducto } from "../controllers/productos.controller.js";

const router = Router();

router.get('/productos', getProductos);

router.get('/productos/:idProducto', getProducto);

router.post('/productos', createProducto);

router.patch('/productos/:idProducto', updateProducto);

router.delete('/productos/:idProducto', deleteProducto);

export default router;