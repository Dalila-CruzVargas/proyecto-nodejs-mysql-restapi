import express from 'express'
import vendedoresRoutes from './routes/vendedores.routes.js'
import proveedoresRoutes from './routes/proveedores.routes.js'
import productosRoutes from './routes/productos.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use('/venta', vendedoresRoutes)
app.use('/api', proveedoresRoutes)
app.use('/medicamento', productosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint Not found'
    })
})

export default app;