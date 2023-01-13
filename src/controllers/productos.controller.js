import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM producto");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
  }
};

export const getProducto = async (req, res) => {
try {
    const [rows] = await pool.query("SELECT * FROM producto WHERE idProducto = ?", [req.params.idProducto,]);
      if (rows.length <= 0)
        return res.status(404).json({
          message: "Producto not found",
        });
      res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const createProducto = async (req, res) => {
    const { nameProducto, priceProducto } = req.body;
try {
    const [rows] = await pool.query("INSERT INTO producto(nameProducto, priceProducto) VALUES (?, ?)", [nameProducto, priceProducto]);
    res.send({
      idProducto: rows.insertId,
      nameProducto,
      priceProducto,
    });
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const deleteProducto = async (req, res) => {
try {
    const result = await pool.query("DELETE FROM producto WHERE idProducto = ?", [req.params.idProducto,]);
      if (result.affectedRows <= 0)
        return res.status(404).json({
          message: "Producto not found",
        });  
      res.sendStatus(204);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};

export const updateProducto = async (req, res) => {
  const { idProducto } = req.params;
  const { nameProducto, priceProducto } = req.body;
try {
    const [result] = await pool.query("UPDATE producto SET nameProducto = IFNULL(?, nameProducto), priceProducto = IFNULL(?, priceProducto) WHERE idProducto = ?", [nameProducto, priceProducto, idProducto]);
      console.log(result);
      if (result.affectedRows === 0)
        return res.status(404).json({
          message: "Producto not found",
        });
      const [rows] = await pool.query("SELECT * FROM producto WHERE idProducto = ?", [idProducto]);
      res.json(rows[0]);
} catch (error) {
    return res.status(500).json({
        message: 'Something goes wrong'
    })
}
};